import { Flex, Tooltip } from 'antd';
import { skills } from './constants';
import { Skill, WrapperIcon } from './styled';
import Section from '~/components/section';

const Skills = () => {
  return (
    <Section title="Skills">
      <Skill>
        {skills.map((item) => {
          const Icon = item.icon;
          return (
            <Flex key={item.name} justify="center">
              <Tooltip title={item.name} placement="top">
                {
                  <WrapperIcon>
                    <Icon />
                  </WrapperIcon>
                }
              </Tooltip>
            </Flex>
          );
        })}
      </Skill>
    </Section>
  );
};

export default Skills;
