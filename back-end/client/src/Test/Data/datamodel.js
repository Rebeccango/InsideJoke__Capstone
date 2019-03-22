const shell = {
    user_name: "",
    user_email: "",
    user_groups: [
                    {name: "public",
                     default: true,
                     id: "",
                     admin: "",
                     members: []
                    },
                    {name: "university",
                    default: true,
                    id: "",
                    admin: "",
                    members: []
                   },
                   {name: "High School",
                   default: true,
                   id: "",
                   admin: "",
                   members: []
                  }
                ],
  user_jokes: [
                { type: "",
                  auth_groups: [],
                  question: "",
                  answer: [],
                  tags: ""
                },
                { type: "",
                auth_groups: [],
                question: "",
                answer: "",
                tags:""
                }
              ]
        }
// to access group list for form creation 
// initiate new variable ----> var userGroupList = [];
  // forEach item in the user_groups: [], push to userGroupList
  // e.g groups.forEach( x => userGroupList.push(x.name));


//Data Sttucture requirements:
//1. ) must be able to pull information by groupo 
//2. ) must be able to 
export default shell;