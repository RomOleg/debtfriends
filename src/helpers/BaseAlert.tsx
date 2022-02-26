import {Alert, AlertButton, AlertOptions} from 'react-native';

interface AlertParams {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
}

interface AlertName {
  [key: string]: AlertParams;
}

class BaseAlert {
  static alerts: AlertName = {};

  static setup(
    name: string,
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
  ): void {
    BaseAlert.alerts[name] = {title, message, buttons, options};
  }

  static alert(name: string): void {
    const {title, message, buttons, options} = BaseAlert.alerts[name];

    Alert.alert(title, message, buttons, options);
  }
}

export default BaseAlert;