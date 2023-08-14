import Image from 'next/image';

export default async function Page({ params }: { params: { work: string; id: string } }) {
    const res = await fetch(`http://localhost:3000/api/${params.work}/${params.id}`);
    const data = await res.json();

    return (
        <div className="mt-44">
            <Image src={data.img_url!} alt="DFSQ" width={500} height={500} />
        </div>
    );
}

export const generateStaticParams = async () => {};
