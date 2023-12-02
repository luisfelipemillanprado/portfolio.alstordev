'use client';
import Link from 'next/link';
import Image from 'next/image';
import PetShelter from '@/public/images/petshelter.jpg';
import Bitcoin from '@/public/images/bitcoin.jpeg';
import WorkPrtfolio from '@/public/images/portfolio.jpg';
import TI from '@/public/images/ti.png';
import { Progress, Card, ConfigProvider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '@/components/cards/project/Project.module.css';
// --
export default function Project(props) {
  const { cover, title, percent, href } = props;
  const bodyStyleCard = { padding: '0.4rem 0 0 0' };
  const IconText = ({ icon, text }) => (
    <div className={[styles.div_horizontal_positioning, styles.project_card_actions].join(' ')}>
      {icon}
      <span className={styles.project_percent}>{text}</span>
    </div>
  );
  const coverSwitch = (cover) => {
    switch (cover) {
      case 'pet-shelter':
        return {
          icon: PetShelter,
        };
      case 'bit-coin':
        return {
          icon: Bitcoin,
        };
      case 'work-portfolio':
        return {
          icon: WorkPrtfolio,
        };
      case 'ti':
        return {
          icon: TI,
        };
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'var(--font-family-1)',
          colorBgContainer: 'var(--second-card-background-color)',
          boxShadowTertiary: 'var(--box-shadow)',
        },
        components: {
          Progress: {
            defaultColor: 'var(--primary-background-border)',
            remainingColor: 'var(--third-card-background-color)',
          },
        },
      }}
    >
      <Card
        className={styles.project_card}
        bodyStyle={bodyStyleCard}
        bordered={false}
        cover={
          <Link href={href} target={'_blank'}>
            <Image
              className={styles.project_card_image}
              width={145}
              height={110}
              src={coverSwitch(cover).icon}
              alt={`Project's image`}
            />
          </Link>
        }
        actions={[
          <IconText
            icon={
              <Progress type='circle' strokeLinecap={'butt'} percent={percent} strokeWidth={20} size={14} />
            }
            text={`${percent.toString()}%`}
            key='list-vertical-star-progress'
          />,
          <IconText
            icon={
              <Button
                className={styles.project_card_actions_button}
                type={'default'}
                icon={<PlusOutlined className={styles.project_card_icon} />}
              />
            }
            text={''}
            key='list-vertical-star-plus-outlined'
          />,
        ]}
      >
        {
          <div className={[styles.div_horizontal_positioning, styles.project_name_container].join(' ')}>
            <span className={styles.project_name}>{title}</span>
          </div>
        }
      </Card>
    </ConfigProvider>
  );
}
