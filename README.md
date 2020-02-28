Usage
react-native init project-name --template andersonfrfilho

To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in android/app/build.gradle:

Copy
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

Update your MainActivity.java file (or wherever you create an instance of ReactActivityDelegate), so that it overrides the method responsible for creating ReactRootView instance and then use the root view wrapper provided by this library. Do not forget to import ReactActivityDelegate, ReactRootView, and RNGestureHandlerEnabledRootView:

package com.swmansion.gesturehandler.react.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
