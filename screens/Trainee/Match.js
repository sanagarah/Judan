import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from 'react-native-elements';
import Deck from "../../components/Cards";

const DATA = [
  { id: 1, name: 'Layla', field: "football", bio: "I'm a passionate trainer who loves to play football", uri: 'data:image/png;base64,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' },
  { id: 2, name: 'Rahaf', field: "dance", bio: "I'm a passionate trainer who loves to dance", uri: "data:image/png;base64,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" },
  { id: 3, name: 'Salwa', field: "drawing", bio: "I'm a passionate trainer who loves to drawing", uri: 'data:image/png;base64,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' },
  { id: 4, name: 'Sana', field: "Singing", bio: "I'm a passionate trainer who loves to singing", uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABaFBMVEX8yQDOpACB2N8xMS8REiT/2agAACVjsLixjQ7rxpmG1dH/ywDMpQDYrA6A2OH/zQBvwMYAAABZrrjXzav/3qsAABfQogALDCAoKir/2acAABotLi8AABgAABQwMS4iJy8fJi8eIyYRHjDcsAEbISXy0KEpLDD/4q3SoAB52eaUlJofIC9qanPkuAiCbiI1NCxNRSnDnxOjhx3uvgOok3PBqIRUTkJmXU/Eq4ZAPTgsJCAqHRlBXmA2PTvly0DArj2d1LrGqSl6zta7xq91tLaWvLLp06ri0aqcnKB5eYFZWmPV1dkpKjhBQUxvb3gvMT5YTihqXCSXfR9FQCk9OSuIcx9fUyV6ZSC3lAmUg2lzaFQNFh4MGzHXu5KqiRFbVUlOfYBPmKKadwAdERyAZQDE0YeJv6ytvoTSzWuR1se1t2bvyiW00Jmhw5eo1K7XzV23tV3Fya64tGHXzGC7sEjr6+vDxchMTVfXamK4AAAM5ElEQVR4nO2biV/bRhbH5WsdYmNhYiofyAdYppZMCBBzpU1TAoklfJA7ISVpt9sjm7a72d3gf39HEgZJ1uiYGR3OR7+UYIOd6st77zdvngaKihQpUqRIkSJFihQpUqRIkSJFihQpUqRIkSJFijQTysgK+iKIKpOh6QxNba+vr2+rT74EPsCxnd16dVqtr6ys/LBS3zi9vTW/DeCCvjA80fTq1svqSq1VSUzUatVXNp68W59lNJq6cadWq1xDTVRp1WtPNmk66AtEE739tFWfhrqK3MqzTWoG0Whqa6MGpVLjJpxmZ46Mzj63iNZV1Oq3ZytoGerFij2WrNrGLAWNXr9Td4Ql5+PKu5kho7PVllMuIOHFjJDRrx2m4UT1JzOxpAEuV1gy2Ssq/Gj0puCWSyELu+isA5eflvBiO+grt1ZmewOFC8Ts3XrQ124p+qVNtwFT5XlsPuiLtxC9hVBgqlqvYrHtsFpIZrWFlohA1dqNWGw9pGT0EzcLs0GVO9lYbDVoBFPRm65XMK3qW7FYOAuNfoaciErIns8DshAWGtLSrAvZOxksfIVGv8SoMCVkp0rIwlZomXnHWxWYWq8VMFBoYQoa/QJxbdaA3VZDBgotaBqtEJsprZ7HJgpPoWXwvF5V/cYVWWgKjb6NaR2yWq8muRjLhmVFo4v4mZiobFyBhWVFo+cJZCLIxdcasFgYdjL0FrYnymo91YKFodCwV+dLsJfzOrJY4Csa6s7ZqOcxgwIuNAJth6rWayNZsIVG38AAq2oe154awYItNN0qVmwUnXt/pVhsNDQRezVvBMvGgiTTeEdxr/vmbCfRbAI+KGBVIWo2izu7b7p7xWvO06mIBVpo2xuagHGFQiHFze3dfXO2u994+/YtYNSo2WyCr1V2zt7c7Z5zKfBi7hps2j3UQguILLO+ogVLpVKlVKmgKsWdn+91u3cn6nb3zucUHvmbskoasGpt05QsoELTbZ6LKZ1K4KNgkPEVmohdbqNDko70u7oWrJRyJR2YiS1OyIIAe1qDRswl2PVmc7rQAgDTDhSLBZcRS+nAnsC4gpjN0XcqGBHTgVXuQCMWQKHRmitLFEs4EUtsWIBls36TaTdjit27knYdS9SsIua372//oANz64o6MCFrCeZroenW50RjzjVYQwtmvkIHUmiZLBZYak4LpplUweRbg6Wf2jfOC/YsWhXOtWA1WOsRQKHRm9rdWGPPLdieDmzLHsyvQqNf68C6bsG6rsF8KjT9/rlx1y3YXR0YtFnUy49Co99pZ2/FN27B3mjtvuUQLLbqPZl+qFg8W3MHtraLBObD3SY9WGXHHVeqtKMdILReOAXzvtD0YNV9zh0Yt59ABPO60Azz7ea5qxW6pFvG3IF5vKIZwFz6vd7tXYJ5u6IZwFzaot4UXZjHpTwsNN3IAxTZjrtU3KligXk4MjCAJZpuNi4lrql7s9MFWiPPCs04uXdVZIYSQ4iYdyuavlcERbbrYonWL8+Oe0Wdsh4Vmr67V3LROZghEx1tW0zkyYo2BeaiD9Z3wAmLUbCNvCi0jPHOemXHOdhO0QBmv4OGyAOwVeORAce7aP3uWQGbuqfpWMSH4BndlEqxjzOnYGeGgCUEZC4vCm3qkEfTWcgK503jO+sYYMQLjZ66A11878jx194bA5YoWg9MrUX6ti49fRii6WCkUyrsTQXs8gAtOhrRQqNPp8Aq+/Z9VUm/E1PfZ3lTwolIFprZufSGvX8UzoyWKN9GwgUjWWimp0ubXZsbZYXuVCKanodwL3JgpkfEGnOWMSvMTcdL3mcSACPWOmZMD+ZULcuswO2bHQJB6YFNRGiPRmdXqiYXWXxvdZ992ulloXdUehECWzc/htnYhZZZYdeUK1G3vYvkJ1hm2/wqEw1IzEqp92YFBlQNFRhF3YEcmirumNVZiTP29BNVnpHhIgUG/wWr4r5ZxPYhXInKy5CBwQ+nN+a4lDYfwUPO1OgVEVnGSIJtQQ9iFufm5jjuGozjwBdgAXM7LvUezDgc0INNCQqGOPHwDCyzCj2d7g5s+kxwsGC6k5hOwMzWc1kbhNyeGBgN83t3YJVnhLyDHBjc71PTXClYKk79QkHwYNBfAWkUOCMXV4DZfeuFzYEj/8GgttiQDz7ruVIpGBgxUyQGljFrg6vVYqOp3FPS5SHQTrNRrJrUGakWmOReczpiBwf7u11uTe06uKtoyd3HGtfd3T84mPpJtEiVGEEwzTynenBw7+Dbb3786dYadA9dWLv104/ffAteqMGb/MJwqMD+/vO9e/cO5A8Z6WghnU4v3rIaetxaBC9JH6l46nt//sdXX4UM7P4vvy4sLBwdLRzGVdmClRSwhcnL5fcuLPz623eE0Mhg/f6h3Y7ncnGNXIIpAv9Arv3hn0TICFBlqAdtHRMymKr2gywBNAJcH29OY+GAxXM3v8cnwwcz58IBA2Sb2GT4YA9MubDA4rkPgYNlfmmbXhoeWLz9Gy4ZLtjHnHnAMMHicdzeCjdgf0AChgvW/vPrYCMWhwQMFywXx9y/YAYMVmH4qYhbZZgB+wALmD1YyhoM1xjxuO7DLgs/YvH4d1hkWFyZ36GZiA/WxusZ8cD+gmZi/NAW7JMMdgj9B3IPggOjzLupa7CHVmAPrcHiN3G48MA+mnT1V5LBjq3AjmUw+PvjbaxWGAvsX/ASU8DSRxZcpaO0Ddi/gwKzWMXil+7xGBqy0mMbU4zn/gwMzMI7LovsGPYbtiU1Ew+twP7C6apwwKy8I67m4uIjWMQeLdpkItiVBQZmyaXkYvoIMn9TK8wqEwEZzogAh+u+VYmpuQhzfNXrLTMRgOH0HhhcVn3HdcgWP5mdGlAWZ5uA4fUeOGB/WKeiWmUgZoZDLKXSZbxsAoZnizhgkGnHtQ5VsuNHOrLSo2OVyyZgoKnCcA8MMBtTlLWgkqUfcgXV90G0uIdplcvSEhUwnKYKgwsyd9NJJQAkx58ec6UC9/jT8QTLlkueLwYCZtlQGcjSi1dKO+WK53L/Qy8ydC5bU1S1kDaXk/fi2CIGGHRApdehGZadb6jCsUV0MNgIeFpTQbu612QHhrHXxABz4B2maE6x8GwRneujs0yc6HBB0aFjKoUMfa+JzJVxZIqYaqPbIjqY5S6TFBj61BQdzHKXSUg59Ak+Ohh8CEwQ7MPXqCN8ZDDKh0yM5+L+p6JLU0QU+ggOGcxZQ4UN9h+/wXwxRRxbRI6YH6Yoj+B8B3PRUOGAIY/gULmc7DKJgPlt9/d94cIYwSFyOdxl4gt5r4kKZjt6IwWGaouIYM53mZhC3muigvnRKSpgqIcHELk++sQVRz57hAhmcz+CoNqItojG5VNDpYAh2iIimD8NlSzUvSYimF/egX5nAhHMt0xE7hbRwD62c76pjdYtogXsv/Gb/gltBIcWMWo165+QAobcK26j/e/8EyIY0HyM1C/neSJ0MGo16Gu3FAZYuNMRA4yS0zG0wgMLcTpigoU3HTHBqExY0xEXDGg9lL5PACyc6UgAjAqlO5IBA+kYNhECC186EgIDmg+XhZADy4QrHcmBUVSo0pEkWKjckSxYiNKRLFiI3JEwGBWahp88WEjSkTxYSNLRAzAqFOnoDVgI0tEbsBAs1l6BBZ6O3oEFnI7egQXsjh6CUYGmI5XxUDQdXNCoeW8VuxGQqL99oaKSX6gisFnTJRhz+ZHUfE4my+Ukc/1MflS+fhpyqWDMgEkyfUF9PJp8b0mS2P7gCmXMJPvSaFbIVLByp1Ne4pfYpeQym+cFhmWXGTbfAxr28mw+zzD5/OgEfPCD2QJjBJ4VRJEX8yI/FPkRz4uD3vhknM93Pkv8yUl/cHIyvhiAz75GjFEKQf4bfL4sC+ayOC7/LsvPl8GH/EB+FVPWgiVZPtkZDpeGw04+z5f5ZH4oSiygEYd8/yQv9S4G+f7nkzLD+MlV7ggiK7B9YVTuM4wojoSkUBbGA1AyffAVgRHYjigNwfWOelKHH43FMT/kh8tasLIk8RLf6YiDMsszPXapI47L+Xz5ROTHF/nBxQXL1j6fCP7mITPuiHwP/LBFEfyAwd/gqSQOe4M8P5YTqyeOOlJniR+Igw4Pvjsc5vlOX9SBJZmeKPBMv88zgiQNpSQvjcu9IQ/Sb3QyvBD5C3FwMT5hfQVLshcjQCKN5foYS7zY4Xlw9byU7A16nd4YgAodwCn1OlIvCWB7g44k8qwOrDwUyn1eZPr8kO3kO7wwGjFjXlxmASAvsSxIyWF+6LN1gGxLDthBcsQMkoIwWBoJo6VBPzkCj5WvyJ8GAwm8aiT0R8vLwohZnlzi1QINVihmGRToUhmUaXlJrqYyuyx/nWFBPZZZUJW+r2KM/J/6R3kk24jylLn61sRgJkvx5BK/9M7jy1MENmv6Pwapf8gHznkUAAAAAElFTkSuQmCC' },

];

export default class Match extends React.Component {

  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Image style={{ height: 250 }} source={{ uri: item.uri }}></Card.Image>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.button1}>
            <MaterialIcons name="person" size={20}></MaterialIcons>
            <Text>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <MaterialIcons name="school" size={20}></MaterialIcons>
            <Text>Training</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <MaterialIcons name="mic" size={20}></MaterialIcons>
            <Text>Performing</Text>
          </TouchableOpacity>

        </View>
        <Card.FeaturedTitle style={{ color: "black" }}>{item.name}</Card.FeaturedTitle>
        <Card.FeaturedSubtitle style={{ color: "gray" }}>{item.field}</Card.FeaturedSubtitle>
        <Card.Divider />
        <Text>{item.bio}</Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}>
        </Deck>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  button1: {
    height: 50, width: 80,
    backgroundColor: "#F25F5C",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button2: {
    height: 50, width: 80,
    backgroundColor: "#70C1B3",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button3: {
    height: 50, width: 80,
    backgroundColor: "#FFE066",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
});