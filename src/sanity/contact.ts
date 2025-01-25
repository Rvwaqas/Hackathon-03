export default{

    name:'contact',
    title:'Contact Form Submission',
    type:'document',
    field:[
        {
            name:'name',
            type:'string',
            title:'Title',

        },
        {
            name:'email',
            type:'string',
            title:'Email'

        },
        {
            name:'subject',
            type:'string',
            title:'Subject'
        },
        {
            name:'message',
            type:'string',
            title:"Message"
        },
        // {
        // name:'submittedAt',
        // type:'datetime',
        // title:'SubmittedAt',
        // initialValue:()=> new Date().toISOString(),
        // },
    ]



}