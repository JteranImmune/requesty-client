export const REQUESTS_HEADINGS = ["Title","Client","Owner","Status","Priority","Created At","Due Date", 'Actions']
export const CLIENTS_HEADINGS = ["Name","Created At"] 
export const TEAM_HEADINGS = ["Name","Role","Created At"] 
export const STATUS_LIST = ["submited","in progress","completed","on hold"]
export const PRIORITY_LIST = ["Low","High","Medium"]
export const ROLE_LIST = ["Admin","Team","Client"]
export const NAVIGATION_LINKS = [
    {link: "/", text:"Dashboard", dropdown:"false", icon:"FaHome", dropdownItems:[{}]},
    {link: "/requests", text:"Requests", dropdown:"false", icon:"FaListUl", dropdownItems:[{}]},
    {link: "/users", text:"Users", dropdown:"true", icon:"FaUser", dropdownItems: [{ to: '/team', label: 'Team'},{ to: '/clients', label: 'Clients'}] },
    // {link: "/services", text:"Services", dropdown:"true", icon:"FaThLarge", dropdownItems:[{ to: '/createSerice', label: 'Create Service'},{ to: '/allServices', label: 'All Services'}] },
]

export const REQUEST_CREATE_LIST = {
    client:'',
    owner:'',
    service:'',
    priority:'',
    dueDate: '',
    title:'',
    description:'',
    attachments:[],
}

export const REQUEST_DETAILS_MOCK = {
    title: '',
    description: '',
    dueDate: '',
    attachments: [],
    service:'',
    createdAt: '',
    status: '',
    owner: '',
    priority:''
}

export const EDIT_REQUEST_MOCK = {
    title: '',
    description: '',
    dueDate: '',
    status: '',
    owner: '',
    priority:''
}

export const REGISTER_LIST = {
    name: "",
    email: "",
    password: "",
    role: "",
}

export const LOGIN_LIST = {
    email: "",
    password: "",
}
