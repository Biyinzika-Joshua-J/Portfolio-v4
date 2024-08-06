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

interface Props {
  title?: string;
  description: string;
  image: string;
  url: string;
  width?: number;
  height?: number;
}

const ProjectCard = ({ title, description, image, url, width, height }: Props) => {
  return (
    <Link href={url} target="_blank">
      <Card className="hover:bg-secondary rounded-3xl  transition-colors">
        <CardHeader>
          <CardTitle className="flex space-x-2 items-center">
            <div>
              <Image
                src={image}
                width={width ? width : 100}
                height={height ? height : 100}
                alt={'logo'}
              />
            </div>

            <div>{title && <h2 className="text-xl">{title}</h2>}</div>
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
