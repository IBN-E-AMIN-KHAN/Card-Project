import React from "react";
import Card from "./components/Card";

const App = () => {
  const freelancers = [
    {
      availability: "Available ",
      pay: "$25/hr",
      image: "https://i.pravatar.cc/150?img=11",
      name: "Alex Morgan",
      role: "Full Stack Developer",
      type: "Freelancer",
      skill1: "React",
      skill2: "Node.js",
      skill3: "MongoDB",
      skill4: "+2",
      bio: "Builds scalable web applications with clean code and modern development practices.",
    },
    {
      availability: "",
      pay: "$30/hr",
      image: "https://i.pravatar.cc/150?img=12",
      name: "Sarah Williams",
      role: "Frontend Engineer",
      type: "Epic Coder",
      skill1: "React",
      skill2: "TypeScript",
      skill3: "CSS",
      skill4: "+3",
      bio: "Creates fast responsive interfaces focused on excellent user experience and performance.",
    },
    {
      availability: "Available",
      pay: "$35/hr",
      image: "https://i.pravatar.cc/150?img=13",
      name: "Daniel Carter",
      role: "Backend Engineer",
      type: "Freelancer",
      skill1: "Node.js",
      skill2: "Python",
      skill3: "PostgreSQL",
      skill4: "+4",
      bio: "Develops reliable backend systems APIs databases and cloud-based software solutions.",
    },
    {
      availability: "Available",
      pay: "$28/hr",
      image: "https://i.pravatar.cc/150?img=14",
      name: "Emily Johnson",
      role: "Mobile App Developer",
      type: "Freelancer",
      skill1: "React Native",
      skill2: "JavaScript",
      skill3: "Firebase",
      skill4: "+2",
      bio: "Builds cross-platform mobile applications with smooth interfaces and maintainable architecture.",
    },
    {
      availability: "Available now",
      pay: "$40/hr",
      image: "https://i.pravatar.cc/150?img=15",
      name: "Michael Brown",
      role: "Senior Software Engineer",
      type: "Epic Coder",
      skill1: "Java",
      skill2: "Spring Boot",
      skill3: "SQL",
      skill4: "+4",
      bio: "Experienced engineer specializing in enterprise applications APIs and scalable software architecture.",
    },
    {
      availability: "Available in 3 hours",
      pay: "$22/hr",
      image: "https://i.pravatar.cc/150?img=16",
      name: "Olivia Davis",
      role: "JavaScript Developer",
      type: "Freelancer",
      skill1: "JavaScript",
      skill2: "React",
      skill3: "Express",
      skill4: "+3",
      bio: "Transforms ideas into interactive websites using modern JavaScript development technologies.",
    },
    {
      availability: "Available now",
      pay: "$32/hr",
      image: "https://i.pravatar.cc/150?img=17",
      name: "James Wilson",
      role: "DevOps Engineer",
      type: "Epic Coder",
      skill1: "Docker",
      skill2: "AWS",
      skill3: "Linux",
      skill4: "+2",
      bio: "Automates deployments and builds reliable cloud infrastructure for growing software teams.",
    },
    {
      availability: "Available next week",
      pay: "$27/hr",
      image: "https://i.pravatar.cc/150?img=18",
      name: "Sophia Miller",
      role: "Python Developer",
      type: "Freelancer",
      skill1: "Python",
      skill2: "Django",
      skill3: "REST API",
      skill4: "+3",
      bio: "Develops powerful Python applications APIs and database-driven solutions for businesses.",
    },
    {
      availability: "Available now",
      pay: "$38/hr",
      image: "https://i.pravatar.cc/150?img=19",
      name: "William Anderson",
      role: "Software Architect",
      type: "Epic Coder",
      skill1: "Java",
      skill2: "AWS",
      skill3: "Microservices",
      skill4: "+4",
      bio: "Designs scalable software architectures and guides teams toward reliable technical solutions.",
    },
    {
      availability: "Available in 1 hour",
      pay: "$24/hr",
      image: "https://i.pravatar.cc/150?img=20",
      name: "Isabella Taylor",
      role: "Frontend Developer",
      type: "Freelancer",
      skill1: "HTML",
      skill2: "CSS",
      skill3: "React",
      skill4: "+2",
      bio: "Creates modern responsive websites with clean layouts and engaging interactive experiences.",
    },
    {
      availability: "Available now",
      pay: "$45/hr",
      image: "https://i.pravatar.cc/150?img=21",
      name: "Benjamin Thomas",
      role: "AI Software Engineer",
      type: "Epic Coder",
      skill1: "Python",
      skill2: "Machine Learning",
      skill3: "TensorFlow",
      skill4: "+4",
      bio: "Builds intelligent software using machine learning automation and modern AI technologies.",
    },
    {
      availability: "Available tomorrow",
      pay: "$29/hr",
      image: "https://i.pravatar.cc/150?img=22",
      name: "Mia Thompson",
      role: "Full Stack Engineer",
      type: "Freelancer",
      skill1: "React",
      skill2: "Node.js",
      skill3: "MongoDB",
      skill4: "+3",
      bio: "Develops complete web applications from responsive frontend interfaces to backend APIs.",
    },
    {
      availability: "Available now",
      pay: "$33/hr",
      image: "https://i.pravatar.cc/150?img=23",
      name: "Ethan Moore",
      role: "Cloud Software Engineer",
      type: "Epic Coder",
      skill1: "AWS",
      skill2: "Python",
      skill3: "Docker",
      skill4: "+2",
      bio: "Builds secure cloud applications and automated infrastructure for scalable production environments.",
    },
    {
      availability: "Available in 4 hours",
      pay: "$26/hr",
      image: "https://i.pravatar.cc/150?img=24",
      name: "Charlotte Martin",
      role: "React Native Developer",
      type: "Freelancer",
      skill1: "React Native",
      skill2: "JavaScript",
      skill3: "Firebase",
      skill4: "+3",
      bio: "Creates polished cross-platform mobile apps with efficient performance and reusable components.",
    },
    {
      availability: "Available now",
      pay: "$42/hr",
      image: "https://i.pravatar.cc/150?img=25",
      name: "Lucas Garcia",
      role: "Senior Full Stack Engineer",
      type: "Epic Coder",
      skill1: "React",
      skill2: "Node.js",
      skill3: "PostgreSQL",
      skill4: "+4",
      bio: "Experienced full-stack engineer building scalable products from architecture through production deployment.",
    },
  ];

  return (
    <div className="parent">
      {freelancers.map((elem, index) => (
        <Card
          key={index}
          availability={elem.availability}
          pay={elem.pay}
          image={elem.image}
          name={elem.name}
          role={elem.role}
          type={elem.type}
          skill1={elem.skill1}
          skill2={elem.skill2}
          skill3={elem.skill3}
          skill4={elem.skill4}
          bio={elem.bio}
        />
      ))}
    </div>
  );
};

export default App;
