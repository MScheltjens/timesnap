import { Logo } from '@/components/svgs';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex h-screen justify-center items-center">
            {/* <Logo width={200} className="animate-spin" /> */}
            <Logo width={200} className="animate-ping" />
            {/* <Logo width={200} className="animate-bounce" /> */}
        </div>
    );
}
