import { Card, CardProps, Tabs, Typography } from 'antd';
import type { Tab } from 'rc-tabs/lib/interface';

interface ICardUIProps extends CardProps {
  children?: React.ReactNode;
  tabItems?: Tab[];
  icon: React.ReactNode;
}

const { Title } = Typography;

const CardUI = ({ children, tabItems, icon, ...cardProps }: ICardUIProps) => {
  return (
    <Card
      {...cardProps}
      className="card-ui"
      styles={{
        body: {
          paddingBlock: 0,
          overflowY: tabItems ? undefined : 'auto',
          maxHeight: tabItems ? undefined : 'calc(100vh - 185px)',
        },
      }}
      title={
        <div className="flex justify-start items-center">
          {icon}
          <Title level={4} className="m-3 ml-2">
            {cardProps.title}
          </Title>
        </div>
      }
      hoverable
    >
      {tabItems ? <Tabs defaultActiveKey="1" items={tabItems} animated={true} type="line" /> : children}
    </Card>
  );
};

export default CardUI;
