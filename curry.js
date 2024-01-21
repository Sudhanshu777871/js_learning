// making curry for sending email

// function toSendEmail(to) {
//     return function emailSubject(subject) {
//         return function emailContent(content) {
//             return `Email Send to ${to}, Subject Is : ${subject} and the content is : ${content}`;
//         }
//     }
// }

// COULD ALSO WRITTEN AS IN SHORT OR WE CAN SAY TAHT ECAM2015
const toSendEmail = (to) => (subject) => (content) => `Email Send to ${to}, Subject Is : ${subject} and the content is : ${content}`;

console.log(toSendEmail('ksudhanshu394@gmail.com')('Job Offer Letter From Google')('Hii Sudhanshu, You are selected and your annual package is 1.8 Cr.')) 