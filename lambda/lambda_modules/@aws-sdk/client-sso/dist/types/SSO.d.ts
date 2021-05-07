import { SSOClient } from "./SSOClient";
import { GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput } from "./commands/GetRoleCredentialsCommand";
import { ListAccountRolesCommandInput, ListAccountRolesCommandOutput } from "./commands/ListAccountRolesCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import { LogoutCommandInput, LogoutCommandOutput } from "./commands/LogoutCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Single Sign-On Portal is a web service that makes it easy for you to assign user
 *       access to AWS SSO resources such as the user portal. Users can get AWS account applications
 *       and roles assigned to them and get federated into the application.</p>
 *
 *          <p>For general information about AWS SSO, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is AWS
 *         Single Sign-On?</a> in the <i>AWS SSO User Guide</i>.</p>
 *
 *          <p>This API reference guide describes the AWS SSO Portal operations that you can call
 *       programatically and includes detailed information on data types and errors.</p>
 *
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a
 *         convenient way to create programmatic access to AWS SSO and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
export declare class SSO extends SSOClient {
    /**
     * <p>Returns the STS short-term credentials for a given role name that is assigned to the
     *       user.</p>
     */
    getRoleCredentials(args: GetRoleCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<GetRoleCredentialsCommandOutput>;
    getRoleCredentials(args: GetRoleCredentialsCommandInput, cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void): void;
    getRoleCredentials(args: GetRoleCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void): void;
    /**
     * <p>Lists all roles that are assigned to the user for a given AWS account.</p>
     */
    listAccountRoles(args: ListAccountRolesCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountRolesCommandOutput>;
    listAccountRoles(args: ListAccountRolesCommandInput, cb: (err: any, data?: ListAccountRolesCommandOutput) => void): void;
    listAccountRoles(args: ListAccountRolesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountRolesCommandOutput) => void): void;
    /**
     * <p>Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the
     *       administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>AWS SSO User Guide</i>. This operation
     *       returns a paginated response.</p>
     */
    listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
    listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
    listAccounts(args: ListAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
    /**
     * <p>Removes the client- and server-side session that is associated with the user.</p>
     */
    logout(args: LogoutCommandInput, options?: __HttpHandlerOptions): Promise<LogoutCommandOutput>;
    logout(args: LogoutCommandInput, cb: (err: any, data?: LogoutCommandOutput) => void): void;
    logout(args: LogoutCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LogoutCommandOutput) => void): void;
}
