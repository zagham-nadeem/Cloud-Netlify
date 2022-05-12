import{Handler}from '@netlify/functions';
const handler: Handler=async (event: any, context) =>{
return{statusCode: 200, body: JSON.stringify(
{name: 'Zagham', age: '21' })
};
};

export{handler }; 
// Zagham