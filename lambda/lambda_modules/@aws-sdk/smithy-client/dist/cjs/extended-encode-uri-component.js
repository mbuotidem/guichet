"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedEncodeURIComponent = void 0;
/**
 * Function that wraps encodeURIComponent to encode additional characters
 * to fully adhere to RFC 3986.
 */
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16);
    });
}
exports.extendedEncodeURIComponent = extendedEncodeURIComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kZWQtZW5jb2RlLXVyaS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5kZWQtZW5jb2RlLXVyaS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztHQUdHO0FBQ0gsU0FBZ0IsMEJBQTBCLENBQUMsR0FBVztJQUNwRCxPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQzVELE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUpELGdFQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHdyYXBzIGVuY29kZVVSSUNvbXBvbmVudCB0byBlbmNvZGUgYWRkaXRpb25hbCBjaGFyYWN0ZXJzXG4gKiB0byBmdWxseSBhZGhlcmUgdG8gUkZDIDM5ODYuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRlZEVuY29kZVVSSUNvbXBvbmVudChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIFwiJVwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG4iXX0=