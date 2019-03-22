const userData = [
    
    {
        user_name: "Rebecca Ngo",
        user_email: "Rebeccango.ngo@gmail.com",
        user_groups: {
          public: {
            id: "fake",
            members: [],

          }
        }
        ["Public","High School", "University", "WDFT2019"],
        jokes: [
            { type: "truthy or falsy",
              group_name: "public",
              question: "During a game of lunchtime Qbitz",
              imgURL: null,
              answer: [true],
            },
            { type: "Multiple Choice",
            group_name: "public",
            question: "",
            imgURL: null,
            answer: [true],
          },
          { type: "Auto Correct",
          group_name: "WDFT2019",
          question: "When I say Milk, you say?",
          imgURL: null,
          answer: ["man", "child", "grandma"],
        },
        { type: "Closed Caption",
        group_name: "WDFT2019",
        question: "https://i.imgur.com/fM2TC8H.png",
        // imgURL: "https://i.imgur.com/fM2TC8H.png",
        answer: [],
      }
            ]

    },

]

module.exports = userData;


{
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
                answer: ""
              },
              { type: "",
              auth_groups: [],
              question: "",
              answer: ""
              }
            ]
}