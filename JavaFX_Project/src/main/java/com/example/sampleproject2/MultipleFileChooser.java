package com.example.sampleproject2;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.Pane;
import javafx.scene.layout.TilePane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.stage.FileChooser;
import javafx.stage.Screen;
import javafx.stage.Stage;
import javafx.fxml.FXMLLoader;


import java.io.*;
import java.util.List;
import java.io.File;

import javax.imageio.ImageIO;


public class MultipleFileChooser extends Application {

    Stage stage;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        stage = primaryStage;
        Pane pane = new Pane();
        TilePane tile = new TilePane();
        Label label = new Label();
        Label label1 = new Label();
        Label label1_1 = new Label();
        Label details = new Label();
        Button button = new Button("Choose images");
        pane.setStyle("-fx-background-color: DAE6F3;");
        tile.setPadding(new Insets(15, 15, 15, 15));
        tile.setHgap(15);

        //button for download
        Button button2 = new Button("Download image");
        pane.setStyle("-fx-background-color: DAE6F3;");
        tile.setPadding(new Insets(30, 30, 30, 30));
        tile.setHgap(10);

        primaryStage.setTitle("Choose files");

        //Create file chooser :

        FileChooser fileChooser = new FileChooser();
        fileChooser.setInitialDirectory(new File("."));
        fileChooser.getExtensionFilters().addAll(new FileChooser.ExtensionFilter("All Files", "*.*"));
        pane.getChildren().add(tile);

        primaryStage.setWidth(Screen.getPrimary().getVisualBounds().getWidth());
        primaryStage.setHeight(Screen.getPrimary().getVisualBounds().getHeight());
        Scene scene = new Scene(pane, 800, 500);

        primaryStage.setHeight(700);
        primaryStage.setWidth(800);

        primaryStage.setScene(scene);
        primaryStage.show();

        //Menu Items in menu button
        MenuItem item1 = new MenuItem("Option 1: PNG");
        MenuItem item2 = new MenuItem("Option 2: JPG");
        MenuItem item3 = new MenuItem("Option 3: GIF");
        MenuItem item4 = new MenuItem("Option 4: BMP");

        //Event Handler method to handle events:

        EventHandler<ActionEvent> event = new EventHandler<ActionEvent>() {

            public void handle(ActionEvent e) {

                //Get the file selected
                List<File> fileList = fileChooser.showOpenMultipleDialog(stage);


                if (fileList != null) {
                    for (int i = 0; i < fileList.size(); i++) {

                        File file = fileList.get(i);
                        pane.setPadding(new Insets(10, 5, 5, 5));
                        ImageView imgView = new ImageView("C:\\Users\\SN\\Desktop\\INFO_5100\\Final-project\\src\\Images");
                        imgView.setFitWidth(20);
                        imgView.setFitHeight(20);

                        ImageView imageView = new ImageView();

                        Image image = new Image(file.toURI().toString());
                        imageView.setImage(image);
                        double width= image.getWidth();
                        double height=image.getHeight();
                        imageView.setX(8);
                        imageView.setY(8);
                        imageView.setFitWidth(100);
                        imageView.setPreserveRatio(true);
                        System.out.println("Reading complete.");

                        // EXIF Property Display

                        javaxt.io.Image img = new javaxt.io.Image(file);
                        java.util.HashMap<Integer, Object> exif = img.getExifTags();

                        //Print Camera properties

                        System.out.println("EXIF Fields: " + exif.size());
                        System.out.println("-----------------------------");
                        System.out.println("Date: " + exif.get(0x0132));
                        System.out.println("Camera: " + exif.get(0x0110));

                        //Print other properties

                        details.setText("Camera : " + exif.get(0x0110) + "  " + "\nDate: " + exif.get(0x0132));
                        details.setFont(new Font("Arial", 15));
                        details.setTextFill(Color.WHITE);

                        label.setText("Height of Image : " + height + "px");
                        label.setFont(new Font("Arial", 15));
                        label.setTextFill(Color.WHITE);

                        label1.setText("Width of Image : " + width + "px");
                        label1.setFont(new Font("Arial", 15));
                        label1.setTextFill(Color.WHITE);

                        label1_1.setText("Location : " + fileList.get(i).getAbsolutePath());
                        label1_1.setFont(new Font("Arial", 15));
                        label1_1.setTextFill(Color.WHITE);

                        tile.getChildren().add(imageView);


                       //Mouse handle Event
                        imageView.setOnMouseClicked(new EventHandler<MouseEvent>() {
                            public void handle(MouseEvent mouseEvent) {
                                if (mouseEvent.getButton().equals(MouseButton.PRIMARY)) {

                                    if (mouseEvent.getClickCount() == 2) {

                                        Pane borderPane = new Pane();
                                        ImageView imageView = new ImageView();

                                        Image image = new Image(file.toURI().toString());
                                        imageView.setImage(image);


                                        imageView.setImage(image);
                                        imageView.setX(70);
                                        imageView.setY(70);
                                        imageView.setFitWidth(300);
                                        imageView.setPreserveRatio(true);

                                        imageView.setPreserveRatio(true);
                                        imageView.setSmooth(true);
                                        imageView.setCache(true);

                                        borderPane.getChildren().add(imageView);

                                        borderPane.getChildren().add(label);
                                        label.relocate(50, 400);
                                        borderPane.getChildren().add(label1_1);
                                        label1_1.relocate(50, 440);
                                        borderPane.getChildren().add(label1);
                                        label1.relocate(50, 420);
                                        borderPane.getChildren().add(details);
                                        details.relocate(50,460);

                                        borderPane.setStyle("-fx-background-color: BLACK");
                                        Stage newStage = new Stage();
                                        newStage.setWidth(700);
                                        newStage.setHeight(700);
                                        Scene scene = new Scene(borderPane, Color.BLACK);
                                        newStage.setScene(scene);
                                        newStage.show();

                                    }
                                }
                            }
                        });


                        //Event handler for Menuitems in Menubutton
                        File imageFile = fileList.get(0);

                        boolean result ;

                        item1.setOnAction(new EventHandler<ActionEvent>() {

                            @Override
                            public void handle(ActionEvent event) {
                                try {
                                    String filename ="image.png";
                                    boolean result = com.example.sampleproject2.ImageConverter.convertFormat(imageFile,
                                            filename, "PNG");


                                    if (result) {
                                        //alert dialogue box for successfully downloading image
                                        Alert alert1 = new Alert(Alert.AlertType.INFORMATION);
                                        alert1.setTitle("Success");
                                        alert1.setHeaderText("Information Alert");
                                        String s1 ="IMAGE CONVERTED SUCCESSFULLY";
                                        alert1.setContentText(s1);
                                        alert1.show();
                                    }
                                    else {

                                        System.out.println("Could not convert image.");
                                    }


                                } catch (Exception ex) {
                                    //alert box for error
                                    Alert alert = new Alert(Alert.AlertType.INFORMATION);
                                    alert.setTitle("Error");
                                    alert.setHeaderText("Information Alert");
                                    String s ="This is an Error during converting image.";
                                    alert.setContentText(s);
                                    alert.show();
                                    ex.printStackTrace();
                                }

                            }
                        });


                        //event handler for menu item 2:
                        item2.setOnAction(new EventHandler<ActionEvent>() {
                            @Override
                            public void handle(ActionEvent event) {

                                try {

                                    String filename = "image.png";
                                    boolean result = com.example.sampleproject2.ImageConverter.convertFormat(imageFile,
                                            filename, "JPG");



                                    if (result) {
                                        //alert dialogue box for successfully downloading image
                                        Alert alert1 = new Alert(Alert.AlertType.INFORMATION);
                                        alert1.setTitle("Success");
                                        alert1.setHeaderText("Information Alert");
                                        String s1 ="IMAGE CONVERTED SUCCESSFULLY";
                                        alert1.setContentText(s1);
                                        alert1.show();

                                    } else {
                                        System.out.println("Could not convert image.");
                                    }
                                } catch (Exception ex) {

                                    //alert box for error
                                    Alert alert = new Alert(Alert.AlertType.INFORMATION);
                                    alert.setTitle("Error");
                                    alert.setHeaderText("Information Alert");
                                    String s ="This is an Error during converting image.";
                                    alert.setContentText(s);
                                    alert.show();
                                    ex.printStackTrace();
                                }


                            }
                        });



                        //event handler for menu item 3:
                        item3.setOnAction(new EventHandler<ActionEvent>() {
                            @Override
                            public void handle(ActionEvent event) {
                                try {
                                    String filename = "image.gif";
                                    boolean result = com.example.sampleproject2.ImageConverter.convertFormat(imageFile,
                                            filename, "GIF");

                                    if (result) {
                                        //alert dialogue box for successfully downloading image
                                        Alert alert1 = new Alert(Alert.AlertType.INFORMATION);
                                        alert1.setTitle("Success");
                                        alert1.setHeaderText("Information Alert");
                                        String s1 ="IMAGE CONVERTED SUCCESSFULLY";
                                        alert1.setContentText(s1);
                                        alert1.show();
                                    } else {
                                        System.out.println("Could not convert image.");
                                    }
                                } catch (Exception ex) {
                                    //alert box for error
                                    Alert alert = new Alert(Alert.AlertType.INFORMATION);
                                    alert.setTitle("Error");
                                    alert.setHeaderText("Information Alert");
                                    String s ="This is an Error during converting image.";
                                    alert.setContentText(s);
                                    alert.show();
                                    ex.printStackTrace();
                                }

                            }
                        });


                        //event handler for menu item 4:
                        item4.setOnAction(new EventHandler<ActionEvent>() {
                            @Override
                            public void handle(ActionEvent event) {
                                try {
                                    String filename = "image.bmp";
                                    boolean result = com.example.sampleproject2.ImageConverter.convertFormat(imageFile,
                                            filename, "BMP");

                                    if (result) {

                                        //alert dialogue box for successfully downloading image
                                        Alert alert1 = new Alert(Alert.AlertType.INFORMATION);
                                        alert1.setTitle("Success");
                                        alert1.setHeaderText("Information Alert");
                                        String s1 ="IMAGE CONVERTED SUCCESSFULLY";
                                        alert1.setContentText(s1);
                                        alert1.show();
                                    }
                                    else {

                                        System.out.println("Could not convert image.");
                                    }
                                } catch (Exception ex) {

                                    //alert box for error
                                    Alert alert = new Alert(Alert.AlertType.INFORMATION);
                                    alert.setTitle("Error");
                                    alert.setHeaderText("Information Alert");
                                    String s ="This is an Error during converting image.";
                                    alert.setContentText(s);
                                    alert.show();
                                    ex.printStackTrace();
                                }


                            }
                        });


                            //for downloading image

                        button2.setOnAction(new EventHandler<ActionEvent>() {
                                @Override
                                public void handle(ActionEvent event) {

                                    try{

                                        Alert alert1 = new Alert(Alert.AlertType.INFORMATION);
                                        alert1.setTitle("Success");
                                        alert1.setHeaderText("Information Alert");
                                        String s1 ="Image downloaded successfully";
                                        alert1.setContentText(s1);
                                        alert1.show();
                                    }
                                    catch (Exception e){
                                        throw new RuntimeException(e);
                                    }
                                }
                            });


                    }

                }

            }
        };

        button.setOnAction(event);

        button.setMinWidth(50);
        button.setMinHeight(50);

        pane.getChildren().add(button);
        button.relocate(350, 400);

        //Create the MenuButton

        MenuButton menuButton = new MenuButton("Image Format");

        // Add the menu items to the MenuButton
        menuButton.getItems().addAll(item1);
        menuButton.getItems().addAll(item2);
        menuButton.getItems().addAll(item3);
        menuButton.getItems().addAll(item4);


        //set menu button size
        menuButton.setMinWidth(50);
        menuButton.setMinHeight(50);

        pane.getChildren().add(menuButton);
        menuButton.relocate(500,400);

        //for download button
        button2.setMinHeight(50);
        button2.setMinWidth(50);
        pane.getChildren().add(button2);
        button2.relocate(200,400);



        }

}








