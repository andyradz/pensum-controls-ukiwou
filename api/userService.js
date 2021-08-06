import { BehaviorSubject } from 'rxjs';

class UserService {
  constructor(backend) {
    this.backend = backend;
    this.currentUserSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('currentUser'))
    );

    this.currentUser = this.currentUserSubject.asObservable();
    window.addEventListener('storage', this._listenForStorageChanges);
  }

  _listenForStorageChanges = (win, event) => {
    const nextUser = JSON.parse(localStorage.getItem('currentUser'));
    if (nextUser !== this.currentUserSubject.value) {
      this.currentUserSubject.next(nextUser);
    }
  };

  login(email, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    return this.backend('/login', requestOptions)
      .then(this._handleResponse)
      .then(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);

        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  _handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if ([401, 403].indexOf(response.status) !== -1) {
          this.logout();
          window.location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }
}

export default UserService;
