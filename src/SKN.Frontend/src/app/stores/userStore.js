import agent from "../api/agent";

export default class UserStore {
	//userRegistry = new Map<string, User>();

    currentUser = undefined;
	loading = false;
	loadingInitial = false;

	get isShowLoading() {
		return this.loadingInitial;
	}

	login = async (loginAccount) => {
		try {
			const user = await agent.Users.login(loginAccount);
			this.currentUser = user;
		} catch (error) {
			console.log(error);
		}
		return this.currentUser;
	};
}