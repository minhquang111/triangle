import React from "react";
import Articles from '../Articles/Articles';
import './Container.scss';
import Header from '../Header/Header';
class Container extends React.Component {
    state = {
        arrArticles: [
            {
                id: "1231",
                type: "link",
                title: "Nhiệt tình hay tròn vai",
                time: "04/14/2021",
                description: "Những trăn trở và những dấu hỏi đặt ra về thái độ trong công việc.",
                arrTag: ["chia sẽ", "cảm nhận"]
            },
            {
                id: "1232",
                type: "locked",
                title: "Tại sao lại cần tới sự đam mê.",
                time: "03/28/2021",
                description: "Cuộc sống chỉ cần một công việc kiếm được tiền, nhiều tiền để sống để ăn chơi là đủ. Nếu chỉ thế vậy chúng ta cần sự đam mê để làm gì?",
                arrTag: ["chia sẽ", "cảm nhận"]
            },
            {
                id: "1233",
                type: "draft",
                title: "10h đầu tiên",
                time: "03/25/2021",
                description: "Có rất nhiều việc tôi muốn làm... nhưng lại có quá ít thời gian. Đó là chuyện thườngthấy của cuộc sống hiện đại",
                arrTag: ["chia sẽ", "cảm nhận"]
            },
            {
                id: "1234",
                type: "link",
                title: "Blog này hoạt động như thế nào.",
                time: "03/05/2021",
                description: "Cách thức hoạt động của blog và mục đích tôi tạo ra nó",
                arrTag: ["chia sẽ", "cảm nhận", "lý do"]
            },
            {
                id: "1235",
                type: "draft",
                title: "Lập kế hoạch cho tương lai như thế nào?",
                time: "03/25/2021",
                description: "Tại sao phải lập kế hoạch. Nếu lập thì mỗi kế hoạch sẽ kéo dài bao lâu và mục tiêu của chúng là gì?",
                arrTag: ["chia sẽ", "cảm nhận"]
            }
        ],
        arrStories: [
            {
                id: "1236",
                type: "link",
                title: "Quá lâu để viết lại blog",
                time: "08/31/2021",
                description: "Những cảm nghĩ của sau tuổi 26",
                arrTag: ["chia sẽ"]
            },
            {
                id: "1237",
                type: "link",
                title: "Tâm sự",
                time: "07/12/2021",
                description: "Một ngày buồn.!",
                arrTag: ["chia sẽ"]
            },
            {
                id: "1238",
                type: "link",
                title: "Tư duy phản biện và những điều vui bên lề",
                time: "04/27/2021",
                description: "Tại sao cần phải trang bị 1 tư duy phản biện. Và ứng dụng trong cái cuộc sống này.",
                arrTag: ["vui"]
            },
            {
                id: "1239",
                type: "link",
                title: "Sự thô lỗ của bản thân và mấu chốt của công việc.",
                time: "04/18/2021",
                description: "Nếu bạn không thể đặt mình vào suy nghĩ và vị thế của người khác bạn khó có thể đưa ra những quyết định đúng đắn. Nhưng trên hết hãy cầu tiến và không để mình rơi vào hố sau của sự ngu dốt. Cùng xem bài dưới đây để hiểu.",
                arrTag: ["chia sẽ", "cảm nhận"],
            },
            {
                id: "1240",
                type: "link",
                title: "Đặt câu hỏi cho người khác có khó không?",
                time: "03/17/2021",
                description: "Đặt câu hỏi cho người khác như thế nào cho đúng, làm thế nào để có được câu trả lời vừa ý?",
                arrTag: ["chia sẽ", "cảm nhận"]
            },
        ],

        arrTechnical: [
            {
                id: "1241",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 7",
                time: "06/28/2021",
                description: "Tổng hợp 3 bài tập cho ứng viên.",
                arrTag: ["bai tap", "training", "golang", "nodejs"]
            },
            {
                id: "1242",
                type: "draft",
                title: "Bài tập golang cơ bản - bài số 8",
                time: "06/28/2021",
                description: "Một số ứng dụng code.",
                arrTag: ["bai tap", "training", "golang", "nodejs"]
            },
            {
                id: "1243",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 1",
                time: "06/28/2021",
                description: "Hướng dẩn nhập môn golang với bài 1 - File và chuỗi. Trước khi có những bước chạy hãy cố gắng tập đi. :D",
                arrTag: ["bai tap", "golang"]
            },
            {
                id: "1244",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 2",
                time: "06/28/2021",
                description: "Hướng dẩn nhập môn golang với bài 2. Tìm hiểu và sử dụng time và context. - Trước khi tìm hiểu sâu hơn hãy nghĩ về thời gian và điều khiển tác vụ.",
                arrTag: ["bai tap", "golang"]
            },
            {
                id: "1245",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 3",
                time: "03/07/2021",
                description: "Hướng dẩn nhập môn golang với bài 3. Goroutine channel và locking. Không đùa đây là bải tôi cần bạn tập trung nhất. Tắt liên lạc với người yêu bạn và tập trung đọc cái đề nhé.",
                arrTag: ["bai tap", "golang"]
            },
            {
                id: "1246",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 4",
                time: "06/28/2021",
                description: "Hướng dẩn nhập môn golang với bài 4. Sử dụng thư viện orm với mysql - xorm. Hi vọng bạn đã nắm vững giá trị cốt lõi trong golang. Thử với db là một trải nghiệm vui.",
                arrTag: ["bai tap", "golang"]
            },
            {
                id: "1247",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 5",
                time: "06/28/2021",
                description: "Hướng dẩn nhập môn golang với bài 5. bài tập sử dụng grpc và http, redis.",
                arrTag: ["bai tap", "golang"]
            },
            {
                id: "1248",
                type: "link",
                title: "Bài tập golang cơ bản - bài số 6",
                time: "06/28/2021",
                description: "Hướng dẩn nhập môn golang với bài 6. Một chút về docker",
                arrTag: ["bai tap", "golang"]
            },
            {
                id: "1249",
                type: "draft",
                title: "Ingress người hùng hay kẽ xứng đáng bị vứt đi.",
                time: "03/06/2021",
                description: "Một số quan điểm cá nhân về ingress controller trong hệ thống K8s",
                arrTag: ["ingress", "k8s"]
            },
        ]

    }
    render() {
        let { type } = this.props;
        return (
            <div className="layout">
                {!type &&
                    <>
                        <Header />
                        <Articles arrBox={this.state.arrArticles} />
                    </>

                }
                {type === 1 &&
                    <>
                        <Header />
                        <Articles arrBox={this.state.arrStories} />
                    </>
                }
                {type === 2 &&
                    <>
                        <Header />
                        <Articles arrBox={this.state.arrTechnical} />
                    </>
                }
                {type === 3 &&
                    <div className="about-container">
                        <h3 className="about-content">This is an about page</h3>
                    </div>
                }

            </div>
        )
    }
}
export default Container;