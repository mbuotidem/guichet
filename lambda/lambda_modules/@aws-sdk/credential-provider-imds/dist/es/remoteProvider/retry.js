/**
 * @internal
 */
export var retry = function (toRetry, maxRetries) {
    var promise = toRetry();
    for (var i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVtb3RlUHJvdmlkZXIvcmV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxLQUFLLEdBQUcsVUFBSSxPQUE2QixFQUFFLFVBQWtCO0lBQ3hFLElBQUksT0FBTyxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJldHJ5YWJsZVByb3ZpZGVyPFQ+IHtcbiAgKCk6IFByb21pc2U8VD47XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCByZXRyeSA9IDxUPih0b1JldHJ5OiBSZXRyeWFibGVQcm92aWRlcjxUPiwgbWF4UmV0cmllczogbnVtYmVyKTogUHJvbWlzZTxUPiA9PiB7XG4gIGxldCBwcm9taXNlID0gdG9SZXRyeSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFJldHJpZXM7IGkrKykge1xuICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKHRvUmV0cnkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuIl19