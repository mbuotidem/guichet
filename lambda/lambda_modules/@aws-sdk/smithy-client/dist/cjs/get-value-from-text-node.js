"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueFromTextNode = void 0;
/**
 * Recursively parses object and populates value is node from
 * "#text" key if it's available
 */
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = exports.getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};
exports.getValueFromTextNode = getValueFromTextNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXZhbHVlLWZyb20tdGV4dC1ub2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldC12YWx1ZS1mcm9tLXRleHQtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0dBR0c7QUFDSSxNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7SUFDL0MsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyw0QkFBb0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQztLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFWVyxRQUFBLG9CQUFvQix3QkFVL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY3Vyc2l2ZWx5IHBhcnNlcyBvYmplY3QgYW5kIHBvcHVsYXRlcyB2YWx1ZSBpcyBub2RlIGZyb21cbiAqIFwiI3RleHRcIiBrZXkgaWYgaXQncyBhdmFpbGFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVRleHROb2RlID0gKG9iajogYW55KSA9PiB7XG4gIGNvbnN0IHRleHROb2RlTmFtZSA9IFwiI3RleHRcIjtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIG9ialtrZXldW3RleHROb2RlTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqW2tleV0gPSBvYmpba2V5XVt0ZXh0Tm9kZU5hbWVdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09PSBcIm9iamVjdFwiICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICBvYmpba2V5XSA9IGdldFZhbHVlRnJvbVRleHROb2RlKG9ialtrZXldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG4iXX0=