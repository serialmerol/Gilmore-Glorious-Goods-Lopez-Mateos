const styles = {
    header:"text-3xl font-extrabold underline text-primary",
  }
const ItemListContainer = (props) => {
    return(
        <h1 className={styles.header}>Welcome Intrepid {props.job}</h1>
    )
};

export default ItemListContainer