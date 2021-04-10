//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Api link
import Api from "../Api";

let api = Api.link;
let userId;

//The beginning of the class
export default class ChatDpndTrainee extends Component {
    state = {
        messages: [],
        trainerMessages: [],
        traineeMessages: []
    };

    //This function will automatically run after rendering the page
    async componentDidMount() {
        userId = await AsyncStorage.getItem("userId");
        let trainerMessages = [];
        let traineeMessages = [];
        let trainerId = this.props.trainerId

        //Get trainee messages
        await axios.get(api + "/MessageGetFromTrainee/" + trainerId + "/" + userId).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                traineeMessages.push({
                    _id: item.id,
                    text: item.text,
                    createdAt: item.time,
                    user: {
                        id: item.id,
                        //name: "React Native2",
                        //avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACvCAMAAACPd2FOAAAAe1BMVEUAAAD////z8/OKioqAgIDp6en8/Pw2NjYMDAwZGRkVFRVoaGgpKSmdnZ3h4eE/Pz8wMDDJycnBwcFAQEAkJCRaWlp3eHfb29vPz89NTU0SEhJtbW0KCgpycnK6urrV1dWbm5uwsLCqqqqRkZFJSUmCg4JcXFwfHx9TU1O0jsVAAAAELklEQVR4nO2dh7aiMBRFjSgWFCyIz4YV9f+/cNQZR+xATjzxrbu/IHuZdkuwVBIEQdCl2dlsvSiZefsgrLMHU5zOIFovu3O/OvzprZzJaMceUBFa0bKqbpm3t2P2wHIRJv6dxJne9mvm2Kj71OKEuwjZQ8zC4PmPcWFpvUqQRePIyurFUl9m1DgyYY/2OXs3h4dSXVu343YujSN79pAf0Rjm9lDKYY/6nk6+aXVmyR73LUEhjQNd9siv6Rf1sMykVtzjcGdhj/5CWNYRUSv2+M9Mi+xXaWzZu5aaHkoN2AonZtoeyrXhDtnR91AqZlsc6CFElMfWKHkQD1Vukj3q94F5MRZkkQjkoVSH6jHWOwrTtKkigK33Py2miO6ZniYheuyBHsoniqyQIsTAt1EsKnwGb7lDZ9bhUKTlUvOnTV7TZ4lkzSpmhbVvtcAetKB3ixapTjkiDlqEdd9awkVIIe+bek4BIo4IetNSak3xaGLP9SOcDBd892WltA2IcJIpWgnfx3BOREhC6xrOL/Jr1sgOL8LZtWAprQuk0GoOFyHVF2K4CCkDjA4QlQo4Isjs3AmXlMkuXJJ+xpzjgUz8/oWWD8LUeC7QSonoRUKrJIJvW8TOAWywO+OJYOcWsQ8NmsWmdnIgD/cRUwQYJf4wPZClni1XBLYD0/vPUKtkwxYBbVzcKvsJSDNKucHWKGGS8lZ0njX0b/MWTKwjG10PVkB1x0TPo2xPs3+iJVJjDz/FWsODfoJcsfglHsVLvKRU1gsKrfiqDQ2/t/TzX1Z6pA6BN4zzhvCkanQGck0vn9tX+prmMrMHMWeSiVq2+bX+gge7wdtMquuwG8gzEjqvqnI/np171WP664eFOTeO7LkhZiUcVOJU3015vpptrH5p/JJx2OkfCFq7L1jdgiAIgiBkYLxr1VK0vuTqe6bZGW1nSTvu+re5YdfvtSveyMa8wxW7wHNWPf99KqIaL7yOlVf6RuAtujkbBN2us7Fprk2DyaJ4a2C3YkWebhoksXaNxF+QXUJPX+IfVYf2yrWVgDtN54z2zN0M+VL3jJt8OJTc4JtlzzgfVJngX/OkqXzGYhqhuzLvKH+iVWhiXONIbDpzlPlrebq4Rl+F5/pani4G2whG+IdurxiaSq/qFKEL4RopwU/RjddZMFC8bn5qlV8D34cb+IdI2QB/dqDO+T2OYK/EjPXxDx959fr4fpUG+DpxxPRAviEzEXjkwEUdjPBXYXkBXVamrJ33AqbbA/7ZkPxgfhJzQW1mXESDM/yVXhE8wGECfzdZhDbgpgL6EqMec0BXFO4LhhpUAS/E9bqTQSBEKmyJIyIiIoYQERExhIiIiCFEREQMISIiYggRERFDiIiIGEJERMQQIiIihhARETGEiIiIIURERAwhIiJiCGkYSBGpMh01fP9nXX8AE7Fb0GFd5QQAAAAASUVORK5CYII=",
                    }
                })
            })
        });
        this.setState({ messages: traineeMessages });

        //Get trainer messages
        await axios.get(api + "/MessageGetFromTrainer/" + trainerId + "/" + userId).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                trainerMessages.push({
                    _id: item.id,
                    text: item.text,
                    createdAt: item.time,
                    user: {
                        _id: item.id,
                        //name: "React Native2",
                        //avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACvCAMAAACPd2FOAAAAe1BMVEUAAAD////z8/OKioqAgIDp6en8/Pw2NjYMDAwZGRkVFRVoaGgpKSmdnZ3h4eE/Pz8wMDDJycnBwcFAQEAkJCRaWlp3eHfb29vPz89NTU0SEhJtbW0KCgpycnK6urrV1dWbm5uwsLCqqqqRkZFJSUmCg4JcXFwfHx9TU1O0jsVAAAAELklEQVR4nO2dh7aiMBRFjSgWFCyIz4YV9f+/cNQZR+xATjzxrbu/IHuZdkuwVBIEQdCl2dlsvSiZefsgrLMHU5zOIFovu3O/OvzprZzJaMceUBFa0bKqbpm3t2P2wHIRJv6dxJne9mvm2Kj71OKEuwjZQ8zC4PmPcWFpvUqQRePIyurFUl9m1DgyYY/2OXs3h4dSXVu343YujSN79pAf0Rjm9lDKYY/6nk6+aXVmyR73LUEhjQNd9siv6Rf1sMykVtzjcGdhj/5CWNYRUSv2+M9Mi+xXaWzZu5aaHkoN2AonZtoeyrXhDtnR91AqZlsc6CFElMfWKHkQD1Vukj3q94F5MRZkkQjkoVSH6jHWOwrTtKkigK33Py2miO6ZniYheuyBHsoniqyQIsTAt1EsKnwGb7lDZ9bhUKTlUvOnTV7TZ4lkzSpmhbVvtcAetKB3ixapTjkiDlqEdd9awkVIIe+bek4BIo4IetNSak3xaGLP9SOcDBd892WltA2IcJIpWgnfx3BOREhC6xrOL/Jr1sgOL8LZtWAprQuk0GoOFyHVF2K4CCkDjA4QlQo4Isjs3AmXlMkuXJJ+xpzjgUz8/oWWD8LUeC7QSonoRUKrJIJvW8TOAWywO+OJYOcWsQ8NmsWmdnIgD/cRUwQYJf4wPZClni1XBLYD0/vPUKtkwxYBbVzcKvsJSDNKucHWKGGS8lZ0njX0b/MWTKwjG10PVkB1x0TPo2xPs3+iJVJjDz/FWsODfoJcsfglHsVLvKRU1gsKrfiqDQ2/t/TzX1Z6pA6BN4zzhvCkanQGck0vn9tX+prmMrMHMWeSiVq2+bX+gge7wdtMquuwG8gzEjqvqnI/np171WP664eFOTeO7LkhZiUcVOJU3015vpptrH5p/JJx2OkfCFq7L1jdgiAIgiBkYLxr1VK0vuTqe6bZGW1nSTvu+re5YdfvtSveyMa8wxW7wHNWPf99KqIaL7yOlVf6RuAtujkbBN2us7Fprk2DyaJ4a2C3YkWebhoksXaNxF+QXUJPX+IfVYf2yrWVgDtN54z2zN0M+VL3jJt8OJTc4JtlzzgfVJngX/OkqXzGYhqhuzLvKH+iVWhiXONIbDpzlPlrebq4Rl+F5/pani4G2whG+IdurxiaSq/qFKEL4RopwU/RjddZMFC8bn5qlV8D34cb+IdI2QB/dqDO+T2OYK/EjPXxDx959fr4fpUG+DpxxPRAviEzEXjkwEUdjPBXYXkBXVamrJ33AqbbA/7ZkPxgfhJzQW1mXESDM/yVXhE8wGECfzdZhDbgpgL6EqMec0BXFO4LhhpUAS/E9bqTQSBEKmyJIyIiIoYQERExhIiIiCFEREQMISIiYggRERFDiIiIGEJERMQQIiIihhARETGEiIiIIURERAwhIiJiCGkYSBGpMh01fP9nXX8AE7Fb0GFd5QQAAAAASUVORK5CYII=",
                    }
                })
            })
        });

        this.setState((previousState) => ({
            messages:
                GiftedChat.append(previousState.messages, trainerMessages)
        }));

    }

    async onSend(messages = []) {
        this.setState((previousState) => ({
            messages:
                GiftedChat.append(previousState.messages, messages)

        }));
        await axios.post(api + "/MessagePost/", {
            trainerId: this.props.trainerId,
            traineeId: parseInt(userId),
            time: messages[messages.length - 1].createdAt,
            text: messages[messages.length - 1].text,
            source: "Trainee"
        });

    }
    render() {
        return <GiftedChat messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
        />;
    }
}
