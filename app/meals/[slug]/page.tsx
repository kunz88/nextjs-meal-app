import { getMeal } from '@/lib/meal';
import classes from './page.module.css'
import Image from 'next/image';


const MealsDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug
    const meal = await getMeal(slug)

    console.log(meal)
    return (
        <>

            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal?.image ?? ''} alt={meal?.title ?? ''} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal?.title}</h1>
                    <p className={classes.creator}>by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator_email}</a> </p>
                    <p className={classes.summary}>{meal?.summary}</p>
                </div>


            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal?.instructions ?? ''
                }} ></p>


            </main>
        </>

    );
};
export default MealsDetails