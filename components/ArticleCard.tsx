import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';

interface Props {
  title?: string;
  description: string;
  Icon: any;
  url: string;
  width?: number;
  height?: number;
  animation: string;
  medium?: string;
}

const ArticleCard = ({
  title,
  description,
  Icon,
  url,
  width,
  height,
  animation,
  medium
}: Props) => {
  return (
    <Link href={url} target="_blank">
      <Card className="hover:bg-secondary group rounded-3xl  transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <div>
                <Icon
                  className={`transition-transform duration-300 ease-in-out transform group-hover:scale-125`}
                />
              </div>

              <div>{title && <h2 className="text-xl">{title}</h2>}</div>
            </div>

            <div>
              <Badge className="bg-primary text-accent">{medium ? medium : 'Medium'}</Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
