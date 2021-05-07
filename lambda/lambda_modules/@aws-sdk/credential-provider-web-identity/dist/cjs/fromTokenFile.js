"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTokenFile = void 0;
const fs_1 = require("fs");
const fromWebToken_1 = require("./fromWebToken");
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
/**
 * Represents OIDC credentials from a file on disk.
 */
const fromTokenFile = (init) => {
    const { webIdentityTokenFile, roleArn, roleSessionName } = init;
    return fromWebToken_1.fromWebToken({
        ...init,
        webIdentityToken: fs_1.readFileSync(webIdentityTokenFile !== null && webIdentityTokenFile !== void 0 ? webIdentityTokenFile : process.env[ENV_TOKEN_FILE], { encoding: "ascii" }),
        roleArn: roleArn !== null && roleArn !== void 0 ? roleArn : process.env[ENV_ROLE_ARN],
        roleSessionName: roleSessionName !== null && roleSessionName !== void 0 ? roleSessionName : process.env[ENV_ROLE_SESSION_NAME],
    });
};
exports.fromTokenFile = fromTokenFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbVRva2VuRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tVG9rZW5GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJCQUFrQztBQUVsQyxpREFBZ0U7QUFFaEUsTUFBTSxjQUFjLEdBQUcsNkJBQTZCLENBQUM7QUFDckQsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDO0FBQ3BDLE1BQU0scUJBQXFCLEdBQUcsdUJBQXVCLENBQUM7QUFTdEQ7O0dBRUc7QUFDSSxNQUFNLGFBQWEsR0FBRyxDQUFDLElBQXVCLEVBQXNCLEVBQUU7SUFDM0UsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFaEUsT0FBTywyQkFBWSxDQUFDO1FBQ2xCLEdBQUcsSUFBSTtRQUNQLGdCQUFnQixFQUFFLGlCQUFZLENBQUMsb0JBQW9CLGFBQXBCLG9CQUFvQixjQUFwQixvQkFBb0IsR0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzNHLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRTtRQUM5QyxlQUFlLEVBQUUsZUFBZSxhQUFmLGVBQWUsY0FBZixlQUFlLEdBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztLQUN2RSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFUVyxRQUFBLGFBQWEsaUJBU3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcblxuaW1wb3J0IHsgZnJvbVdlYlRva2VuLCBGcm9tV2ViVG9rZW5Jbml0IH0gZnJvbSBcIi4vZnJvbVdlYlRva2VuXCI7XG5cbmNvbnN0IEVOVl9UT0tFTl9GSUxFID0gXCJBV1NfV0VCX0lERU5USVRZX1RPS0VOX0ZJTEVcIjtcbmNvbnN0IEVOVl9ST0xFX0FSTiA9IFwiQVdTX1JPTEVfQVJOXCI7XG5jb25zdCBFTlZfUk9MRV9TRVNTSU9OX05BTUUgPSBcIkFXU19ST0xFX1NFU1NJT05fTkFNRVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZyb21Ub2tlbkZpbGVJbml0IGV4dGVuZHMgUGFydGlhbDxPbWl0PEZyb21XZWJUb2tlbkluaXQsIFwid2ViSWRlbnRpdHlUb2tlblwiPj4ge1xuICAvKipcbiAgICogRmlsZSBsb2NhdGlvbiBvZiB3aGVyZSB0aGUgYE9JRENgIHRva2VuIGlzIHN0b3JlZC5cbiAgICovXG4gIHdlYklkZW50aXR5VG9rZW5GaWxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgT0lEQyBjcmVkZW50aWFscyBmcm9tIGEgZmlsZSBvbiBkaXNrLlxuICovXG5leHBvcnQgY29uc3QgZnJvbVRva2VuRmlsZSA9IChpbml0OiBGcm9tVG9rZW5GaWxlSW5pdCk6IENyZWRlbnRpYWxQcm92aWRlciA9PiB7XG4gIGNvbnN0IHsgd2ViSWRlbnRpdHlUb2tlbkZpbGUsIHJvbGVBcm4sIHJvbGVTZXNzaW9uTmFtZSB9ID0gaW5pdDtcblxuICByZXR1cm4gZnJvbVdlYlRva2VuKHtcbiAgICAuLi5pbml0LFxuICAgIHdlYklkZW50aXR5VG9rZW46IHJlYWRGaWxlU3luYyh3ZWJJZGVudGl0eVRva2VuRmlsZSA/PyBwcm9jZXNzLmVudltFTlZfVE9LRU5fRklMRV0hLCB7IGVuY29kaW5nOiBcImFzY2lpXCIgfSksXG4gICAgcm9sZUFybjogcm9sZUFybiA/PyBwcm9jZXNzLmVudltFTlZfUk9MRV9BUk5dISxcbiAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZSA/PyBwcm9jZXNzLmVudltFTlZfUk9MRV9TRVNTSU9OX05BTUVdLFxuICB9KTtcbn07XG4iXX0=