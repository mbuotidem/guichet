"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamCollector = void 0;
const util_base64_browser_1 = require("@aws-sdk/util-base64-browser");
//reference: https://snack.expo.io/r1JCSWRGU
const streamCollector = (stream) => {
    if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
    }
    return collectStream(stream);
};
exports.streamCollector = streamCollector;
async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = util_base64_browser_1.fromBase64(base64);
    return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
    let res = new Uint8Array(0);
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            const prior = res;
            res = new Uint8Array(prior.length + value.length);
            res.set(prior);
            res.set(value, prior.length);
        }
        isDone = done;
    }
    return res;
}
function readToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            var _a;
            // reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            // response from readAsDataURL is always prepended with "data:*/*;base64,"
            if (reader.readyState !== 2) {
                return reject(new Error("Reader aborted too early"));
            }
            const result = ((_a = reader.result) !== null && _a !== void 0 ? _a : "");
            // Response can include only 'data:' for empty blob, return empty string in this case.
            // Otherwise, return the string after ','
            const commaIndex = result.indexOf(",");
            const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
            resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        // reader.readAsArrayBuffer is not always available
        reader.readAsDataURL(blob);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNvbGxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJlYW0tY29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNFQUEwRDtBQUUxRCw0Q0FBNEM7QUFDckMsTUFBTSxlQUFlLEdBQW9CLENBQUMsTUFBNkIsRUFBdUIsRUFBRTtJQUNyRyxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsSUFBSSxNQUFNLFlBQVksSUFBSSxFQUFFO1FBQ3hELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxhQUFhLENBQUMsTUFBd0IsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQU5XLFFBQUEsZUFBZSxtQkFNMUI7QUFFRixLQUFLLFVBQVUsV0FBVyxDQUFDLElBQVU7SUFDbkMsTUFBTSxNQUFNLEdBQUcsTUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxXQUFXLEdBQUcsZ0NBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxPQUFPLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxLQUFLLFVBQVUsYUFBYSxDQUFDLE1BQXNCO0lBQ2pELElBQUksR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkIsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNkLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDbEIsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUI7UUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFVO0lBQzlCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTs7WUFDdEIsdUZBQXVGO1lBQ3ZGLDBFQUEwRTtZQUMxRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7WUFDRCxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQUEsTUFBTSxDQUFDLE1BQU0sbUNBQUksRUFBRSxDQUFXLENBQUM7WUFDL0Msc0ZBQXNGO1lBQ3RGLHlDQUF5QztZQUN6QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNwRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLG1EQUFtRDtRQUNuRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmVhbUNvbGxlY3RvciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgZnJvbUJhc2U2NCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWJhc2U2NC1icm93c2VyXCI7XG5cbi8vcmVmZXJlbmNlOiBodHRwczovL3NuYWNrLmV4cG8uaW8vcjFKQ1NXUkdVXG5leHBvcnQgY29uc3Qgc3RyZWFtQ29sbGVjdG9yOiBTdHJlYW1Db2xsZWN0b3IgPSAoc3RyZWFtOiBCbG9iIHwgUmVhZGFibGVTdHJlYW0pOiBQcm9taXNlPFVpbnQ4QXJyYXk+ID0+IHtcbiAgaWYgKHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiYgc3RyZWFtIGluc3RhbmNlb2YgQmxvYikge1xuICAgIHJldHVybiBjb2xsZWN0QmxvYihzdHJlYW0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3RTdHJlYW0oc3RyZWFtIGFzIFJlYWRhYmxlU3RyZWFtKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbGxlY3RCbG9iKGJsb2I6IEJsb2IpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgY29uc3QgYmFzZTY0ID0gYXdhaXQgcmVhZFRvQmFzZTY0KGJsb2IpO1xuICBjb25zdCBhcnJheUJ1ZmZlciA9IGZyb21CYXNlNjQoYmFzZTY0KTtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29sbGVjdFN0cmVhbShzdHJlYW06IFJlYWRhYmxlU3RyZWFtKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG4gIGxldCByZXMgPSBuZXcgVWludDhBcnJheSgwKTtcbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICBsZXQgaXNEb25lID0gZmFsc2U7XG4gIHdoaWxlICghaXNEb25lKSB7XG4gICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IHByaW9yID0gcmVzO1xuICAgICAgcmVzID0gbmV3IFVpbnQ4QXJyYXkocHJpb3IubGVuZ3RoICsgdmFsdWUubGVuZ3RoKTtcbiAgICAgIHJlcy5zZXQocHJpb3IpO1xuICAgICAgcmVzLnNldCh2YWx1ZSwgcHJpb3IubGVuZ3RoKTtcbiAgICB9XG4gICAgaXNEb25lID0gZG9uZTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiByZWFkVG9CYXNlNjQoYmxvYjogQmxvYik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgLy8gcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVJlYWRlci9yZWFkQXNEYXRhVVJMXG4gICAgICAvLyByZXNwb25zZSBmcm9tIHJlYWRBc0RhdGFVUkwgaXMgYWx3YXlzIHByZXBlbmRlZCB3aXRoIFwiZGF0YToqLyo7YmFzZTY0LFwiXG4gICAgICBpZiAocmVhZGVyLnJlYWR5U3RhdGUgIT09IDIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJSZWFkZXIgYWJvcnRlZCB0b28gZWFybHlcIikpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gKHJlYWRlci5yZXN1bHQgPz8gXCJcIikgYXMgc3RyaW5nO1xuICAgICAgLy8gUmVzcG9uc2UgY2FuIGluY2x1ZGUgb25seSAnZGF0YTonIGZvciBlbXB0eSBibG9iLCByZXR1cm4gZW1wdHkgc3RyaW5nIGluIHRoaXMgY2FzZS5cbiAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBzdHJpbmcgYWZ0ZXIgJywnXG4gICAgICBjb25zdCBjb21tYUluZGV4ID0gcmVzdWx0LmluZGV4T2YoXCIsXCIpO1xuICAgICAgY29uc3QgZGF0YU9mZnNldCA9IGNvbW1hSW5kZXggPiAtMSA/IGNvbW1hSW5kZXggKyAxIDogcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc29sdmUocmVzdWx0LnN1YnN0cmluZyhkYXRhT2Zmc2V0KSk7XG4gICAgfTtcbiAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJSZWFkIGFib3J0ZWRcIikpO1xuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgLy8gcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyIGlzIG5vdCBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gIH0pO1xufVxuIl19