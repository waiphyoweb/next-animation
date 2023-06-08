import styles from '@/styles/Text.module.css'

const Text = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header1}>
                    <h3>Did you find what you are looking for?</h3>
                </div>
                <h6 className={styles.phone}>Hotline: +95 987654321</h6>

                <div className={styles.content1}>
                    <h3>TRUST FROM CUSTOMERS</h3>
                    <h6>Join Our 1000+ Happy Customer</h6>
                </div>

                <div className={styles.content2}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet faucibus justo quis aliquam. Phasellus eget ullamcorper quam. Phasellus eget ligula velit. Ut id ligula convallis, venenatis neque sit amet, volutpat nisl. Donec in diam augue. Sed vulputate sapien iaculis efficitur finibus. Sed ut mauris at metus faucibus posuere et eget nibh. Donec euismod lacinia imperdiet.
                    </p>
                    <br />
                    <div className={styles.testimonial}>
                        <h4>David Bentlay</h4>
                        <h4>&#9733; &#9733; &#9733; &#9733;</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Text;