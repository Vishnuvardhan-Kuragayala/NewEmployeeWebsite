const sessionName = "session";

const SessionService = {
	getUserSession(): string|null {
		return localStorage.getItem(sessionName);
	},

	setUserSession(sessionValue: string) {
		localStorage.setItem(sessionName, sessionValue);
	},

	clearUserSession() {
		localStorage.removeItem(sessionName);
	}
};

export default SessionService;
