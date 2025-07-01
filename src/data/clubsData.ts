
export const clubsData = {
  clubs: {
    matrix: {
      name: "Matrix",
      color: "#00ff41",
      about: "The Matrix club is the foundational pillar of The Matrix Clan, focusing on cutting-edge technology, programming, and digital innovation. Our members are passionate about exploring the frontiers of computer science, artificial intelligence, and emerging technologies that shape our digital future.",
      members: [
        {
          name: "Alex Chen",
          role: "President",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Sarah Kumar",
          role: "Vice President",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Michael Rodriguez",
          role: "Technical Lead",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Emily Zhang",
          role: "Innovation Head",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        }
      ],
      contact: {
        email: "matrix@thematrixclan.com",
        discord: "@MatrixClan"
      }
    },
    ecomm: {
      name: "Ecomm",
      color: "#008afb",
      about: "Ecomm represents the business and entrepreneurial spirit of The Matrix Clan. We focus on e-commerce innovations, digital marketing strategies, and the intersection of technology with business. Our mission is to create sustainable digital solutions for modern commerce.",
      members: [
        {
          name: "David Park",
          role: "Business Lead",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Jessica Martinez",
          role: "Marketing Director",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Ryan Thompson",
          role: "Strategy Head",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
        }
      ],
      contact: {
        email: "ecomm@thematrixclan.com",
        discord: "@EcommMatrix"
      }
    },
    psynapse: {
      name: "Psynapse",
      color: "#CC6CE7",
      about: "Psynapse bridges the gap between psychology and technology, exploring cognitive computing, user experience design, and the human-computer interface. We investigate how technology can enhance human potential and create more intuitive digital experiences.",
      members: [
        {
          name: "Sophia Williams",
          role: "Research Lead",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "James Brown",
          role: "UX Director",
          image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Lily Johnson",
          role: "Design Head",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
        }
      ],
      contact: {
        email: "psynapse@thematrixclan.com",
        discord: "@PsynapseTeam"
      }
    }
  },
  events: [
    {
      id: 1,
      title: "MEP 2025 Symposium",
      date: "2025-03-15",
      club: "all",
      description: "The flagship annual event bringing together Matrix, Ecomm, and Psynapse for an unforgettable technological showcase.",
      featured: true
    },
    {
      id: 2,
      title: "Matrix Code Championship",
      date: "2025-02-20",
      club: "matrix",
      description: "Competitive programming and algorithm challenges for the next generation of coders."
    },
    {
      id: 3,
      title: "Ecomm Business Pitch",
      date: "2025-02-28",
      club: "ecomm",
      description: "Student entrepreneurs present innovative business solutions and digital commerce ideas."
    },
    {
      id: 4,
      title: "Psynapse UX Workshop",
      date: "2025-03-05",
      club: "psynapse",
      description: "Interactive workshop on user experience design and cognitive computing applications."
    }
  ]
};

export type Club = typeof clubsData.clubs.matrix;
export type ClubKey = keyof typeof clubsData.clubs;
