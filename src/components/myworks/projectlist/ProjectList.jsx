import Project from '@/components/cards/project/Project';
import { Row, Col } from 'antd';
import styles from '@/components/myworks/projectlist/ProjectList.module.css';
// --
export default function ProjectList(props) {
  const array = [
    {
      cover: 'pet-shelter',
      title: 'Pet Shelter',
      percent: '90',
      href: 'https://github.com/luisfelipemillanprado/Take-me-Home',
      id: Math.random(),
    },
    {
      cover: 'bit-coin',
      title: 'Bitcoin',
      percent: '99',
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
    {
      cover: 'work-portfolio',
      title: 'Portfolio',
      percent: '99',
      href: 'https://github.com/luisfelipemillanprado/work-portfolio',
      id: Math.random(),
    },
    {
      cover: 'ti',
      title: 'Ticket',
      percent: '30',
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
  ];
  return (
    <div className={[styles.div_vertical_positioning, styles.project_list_container].join(' ')}>
      <h3 className={styles.project_list_title}>Projects.</h3>
      <Row className={styles.project_list_container} gutter={[0, 20]} justify={'space-between'}>
        {array.map((element) => {
          return (
            <Col key={element.id}>
              <Project
                {...{
                  cover: element.cover,
                  title: element.title,
                  percent: element.percent,
                  href: element.href,
                }}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
