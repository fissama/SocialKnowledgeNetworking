import agent from "../api/agent";

export default class VerifyStore {
	//userRegistry = new Map<string, User>();
	result = 1;
	verify = async (VerifyInformation) => {
		try {
			const result = await agent.Verify.verify(VerifyInformation);
			this.result = result;
		}
		catch (error) {
			console.log(error);
		}
	};
	getanswer = async (id) => {
		try {
			await agent.Verify.getanswer(id).then(result => {
				console.log(result);
				console.log(2);
				return result;
			});

		}
		catch (error) {
			console.log(error);
			return [];
		}
	}
}