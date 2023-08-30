import { ContactForm } from '@/components';

export default function Page() {
    return (
        <div className="h-screen bg-black flex flex-col items-center w-full">
            <section className="w-4/5 mt-44">
                <ContactForm />
            </section>
        </div>
    );
}
