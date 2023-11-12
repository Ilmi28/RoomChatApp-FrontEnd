import styles from "./SuccessfulMigration.module.css";
import { useNavigate } from "react-router-dom";

const SuccessfulRegistration = () => {
    const navigate = useNavigate();
    return (
        <div className="page">
            <p className="display-6">
                You've successfully created account{" "}
                <div>
                    You can now
                    <a
                        className={styles.loginLink}
                        onClick={() => navigate("/login")}
                    >
                        &nbsp;login
                    </a>
                </div>
            </p>
        </div>
    );
};

export default SuccessfulRegistration;


