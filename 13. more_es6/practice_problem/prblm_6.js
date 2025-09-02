/**
 * একটা বয়সের array থেকে শুধু ১৮ বা তার বেশি বয়সের গুলো বের করতে হবে।
 */

const ages = [17, 23, 24, 18, 15, 19];
const adult = ages.filter((x) => x >= 18);
console.log(adult);
