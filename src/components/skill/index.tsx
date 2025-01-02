import { Tooltip } from 'antd';
import { skills } from './constants';
import { Skill, Title, Wrapper, WrapperIcon } from './styled';

const Skills = () => {
  return (
    <Wrapper>
      <Title>Skills</Title>
      <Skill>
        {skills.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name}>
              <Tooltip title={item.name} placement="top">
                {
                  <WrapperIcon>
                    <Icon />
                  </WrapperIcon>
                }
              </Tooltip>
            </div>
          );
        })}
      </Skill>
    </Wrapper>
  );
};

export default Skills;
