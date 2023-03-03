import { v4 as uuidv4} from "uuid";

const dummyData = [
    {
        id: uuidv4(),
        title: "未着手",
        tasks: [
            {
                id: uuidv4(),
                title: "React",
            },
            {
                id: uuidv4(),
                title: "django",
            },
            {
                id: uuidv4(),
                title: "Apache",
            }

        ],
    },
    {
        id: uuidv4(),
        title: "実行中",
        tasks: [
            {
                id: uuidv4(),
                title: "Cloud",
            },
            {
                id: uuidv4(),
                title: "AWS",
            },
            {
                id: uuidv4(),
                title: "Spot",
            }

        ],
    },
    {
        id: uuidv4(),
        title: "完了",
        tasks: [
            {
                id: uuidv4(),
                title: "English",
            },
            {
                id: uuidv4(),
                title: "Math",
            },
            {
                id: uuidv4(),
                title: "Japanese",
            }

        ],
    },
]

export default dummyData;
