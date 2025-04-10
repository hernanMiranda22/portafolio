import TechBubble from "./TechBubble";

const TechList = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <TechBubble key={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  );
};

export default TechList;

