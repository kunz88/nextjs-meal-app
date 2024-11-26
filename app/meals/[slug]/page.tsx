const MealsDetails = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params
    return (
        <div>
            <p>{params.slug}</p>
        </div>
    );
};
export default MealsDetails