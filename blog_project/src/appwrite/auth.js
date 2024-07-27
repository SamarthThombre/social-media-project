import conf from "../assets/conf/conf";
import { Client, Account, ID } form "appwirte";


export class AuthService {
    client= new Client();
    account;

    constructor() {
        this.client 
            .setEndpoint(conf.appwriteURL)
            .setEndpoint(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name );
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser():: ". error );
        }
        return null
    }

    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() :: ", error);
        }
    }
}

const AuthService =new AuthService();

export default AuthService