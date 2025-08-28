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
  image: string | undefined;
  url: string;
  width?: number;
  height?: number;
  animation: string;
  type?: string | undefined;
}

const ProjectCard = ({ title, description, image, url, width, height, animation, type }: Props) => {
  return (
    <Link href={url} target="_blank">
      <Card className="hover:bg-secondary group rounded-3xl  transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <div>
                {image && (
                  <Image
                    src={image}
                    width={width ? width : 100}
                    height={height ? height : 100}
                    alt={'logo'}
                    className={`transition-transform duration-300 ease-in-out transform group-hover:rotate-6`}
                  />
                )}
              </div>

              <div>{title && <h2 className="text-xl">{title}</h2>}</div>
            </div>

            <div>
              <Badge className="bg-primary text-accent text-center">{type || 'Startup'}</Badge>
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

export default ProjectCard;
