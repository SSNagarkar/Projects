module com.example.sampleproject2 {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.controlsfx.controls;
    requires org.kordamp.bootstrapfx.core;
    requires java.desktop;

    requires javaxt.core;

    opens com.example.sampleproject2 to javafx.fxml;
    exports com.example.sampleproject2;
}