const Storage = {
    getUsers() { return JSON.parse(localStorage.getItem('cinema_users') || '[]'); },
    saveUsers(users) { localStorage.setItem('cinema_users', JSON.stringify(users)); },

    getCurrentUser() {
        const username = localStorage.getItem('cinema_current_user');
        if (!username) return null;
        return this.getUsers().find(u => u.username === username) || null;
    },
    setCurrentUser(username) { localStorage.setItem('cinema_current_user', username); },
    logout() { localStorage.removeItem('cinema_current_user'); },

    getBookings() { return JSON.parse(localStorage.getItem('cinema_bookings') || '[]'); },
    saveBookings(bookings) { localStorage.setItem('cinema_bookings', JSON.stringify(bookings)); },

    addBooking(booking) {
        const bookings = this.getBookings();
        bookings.push(booking);
        this.saveBookings(bookings);
    },

    getOccupiedSeats(showtimeId) {
        return this.getBookings()
            .filter(b => b.showtimeId === showtimeId && b.status === 'confirmed')
            .flatMap(b => b.seats);
    },

    getPendingBooking() { return JSON.parse(localStorage.getItem('cinema_pending') || 'null'); },
    setPendingBooking(b) { localStorage.setItem('cinema_pending', JSON.stringify(b)); },
    clearPendingBooking() { localStorage.removeItem('cinema_pending'); }
};

function renderHeader() {
    const user = Storage.getCurrentUser();
    const userInfo = document.getElementById('user-info');
    if (!userInfo) return;

    if (user) {
        userInfo.innerHTML = `
            <a href="profile.html" id="link-profile" data-test-id="link-profile">
                <span class="username" id="header-username">${user.username}</span>
            </a>
            <button class="btn btn-secondary" id="logout-btn" data-test-id="logout-btn" onclick="handleLogout()">Logout</button>
        `;
    } else {
        userInfo.innerHTML = `
            <a href="login.html" id="link-login" data-test-id="link-login">Login</a>
            <a href="register.html" id="link-register" data-test-id="link-register">Register</a>
        `;
    }
}

function handleLogout() {
    Storage.logout();
    window.location.href = 'index.html';
}

function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function getMovieById(id) {
    return MOVIES.find(m => m.id === parseInt(id));
}

function getHallById(id) {
    return HALLS.find(h => h.id === parseInt(id));
}

function showAlert(elementId, message, type = 'error') {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.className = `alert alert-${type}`;
    el.textContent = message;
    el.classList.remove('hidden');
}

function hideAlert(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', renderHeader);
