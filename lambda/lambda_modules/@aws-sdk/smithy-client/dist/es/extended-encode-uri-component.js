/**
 * Function that wraps encodeURIComponent to encode additional characters
 * to fully adhere to RFC 3986.
 */
export function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kZWQtZW5jb2RlLXVyaS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5kZWQtZW5jb2RlLXVyaS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEdBQVc7SUFDcEQsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUM1RCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZ1bmN0aW9uIHRoYXQgd3JhcHMgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGVuY29kZSBhZGRpdGlvbmFsIGNoYXJhY3RlcnNcbiAqIHRvIGZ1bGx5IGFkaGVyZSB0byBSRkMgMzk4Ni5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZGVkRW5jb2RlVVJJQ29tcG9uZW50KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gXCIlXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cbiJdfQ==