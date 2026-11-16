# 1. AI là gì?

**Thời gian đọc dự kiến:** 8 phút

Trang này cung cấp vốn từ cần cho workshop. Bạn không cần nền tảng toán hay lập trình.

## AI trong một câu

**Trí tuệ nhân tạo (Artificial Intelligence, AI)** là phần mềm thực hiện các tác vụ thường cần phán đoán của con người, như nhận diện khuôn mặt, dịch câu, đề xuất video hoặc viết đoạn văn.

AI không phải một công nghệ duy nhất mà là lĩnh vực rộng gồm nhiều cách tiếp cận.

## Ba lớp lồng nhau

```text
Artificial Intelligence
  └── Machine Learning
        └── Deep Learning
              └── Large Language Models (LLMs), một dạng deep learning
```

Mỗi vòng tròn bên trong là cách xây dựng AI cụ thể hơn.

## Lớp 1: AI dựa trên luật

Lập trình viên viết mọi luật thủ công:

```text
if the cart total is over 100 dollars:
    apply a 10% discount
```

Đây là lập trình thông thường, hiệu quả khi luật rõ ràng và đầy đủ. Nó thất bại khi luật quá nhiều hoặc khó mô tả, như quyết định ảnh có mèo hay không.

## Lớp 2: Machine learning

Trong **machine learning (ML)**, bạn không viết luật. Bạn đưa cho chương trình nhiều ví dụ và để nó tự tìm mẫu.

Ví dụ: bộ lọc thư rác. Thay vì viết “email có từ *prize* là spam”, bạn cho hệ thống xem hàng nghìn email có nhãn *spam* hoặc *not spam*. Nó học những mẫu thường xuất hiện trong spam.

Ba thành phần có trong hầu hết hệ thống ML:

1. **Data:** các ví dụ để học.
2. **Model:** hàm toán học có các số điều chỉnh được gọi là **parameters** (hoặc *weights*). Model có hàng triệu hay hàng tỷ parameters phổ biến trong AI hiện đại.
3. **Learning method:** quy trình điều chỉnh parameters để model mắc ít lỗi hơn.

**Phép tương tự:** dạy trẻ biết chó. Bạn chỉ vào nhiều con chó và nói “chó”, không đưa danh sách luật như “bốn chân và sủa”, vì có nhiều ngoại lệ.

ML thường gồm ba kiểu:

| Kiểu | Cách học | Ví dụ |
| --- | --- | --- |
| Supervised learning | Từ ví dụ có đáp án đúng (nhãn) | Spam hay không spam |
| Unsupervised learning | Tìm nhóm trong data không nhãn | Gom khách hàng có thói quen mua tương tự |
| Reinforcement learning | Học từ phần thưởng và hình phạt | Game agent học cách thắng |

## Lớp 3: Deep learning

**Deep learning** là machine learning dùng **neural networks** nhiều lớp.

Neural network gồm các đơn vị đơn giản xếp thành lớp. Mỗi đơn vị kết hợp input bằng parameters rồi truyền kết quả sang lớp kế tiếp. Training điều chỉnh các parameters cùng nhau.

**Phép tương tự:** một chồng bộ lọc. Trong model ảnh, lớp đầu nhận ra cạnh; lớp sau ghép thành hình dạng, bộ phận rồi vật thể. Training tự khám phá các lớp đó.

Deep learning cần nhiều data và năng lực tính toán, nên chỉ thực tế trong khoảng hơn một thập kỷ gần đây.

## Hai loại output: predictive và generative

- **Predictive AI** trả lời về thứ đã tồn tại, cho ra nhãn, điểm số hoặc con số.
- **Generative AI** tạo nội dung mới như text, code, ảnh, audio hoặc video.

| Tình huống | Predictive AI | Generative AI |
| --- | --- | --- |
| Email | Email này có phải spam không? (có/không) | Soạn thư trả lời email |
| Ảnh | Vật thể nào trong ảnh? | Tạo ảnh từ mô tả |
| Sales data | Tháng tới sales tăng không? (forecast) | Tóm tắt sales tháng này |
| Code | Hàm có khả năng có bug không? | Viết hàm sắp xếp list |

**Large language model (LLM)** là generative model chuyên về ngôn ngữ. Chat assistant và coding assistant thường dùng LLM. Trang 2 giải thích cách nó hoạt động.

## Nơi bạn đã dùng AI

- **Maps apps** ước tính thời gian từ mẫu giao thông (ML).
- **Bàn phím điện thoại** gợi ý từ tiếp theo (language models).
- **Ứng dụng video và nhạc** đề xuất nội dung (ML).
- **Face unlock** nhận diện khuôn mặt (deep learning).
- **Chat và coding assistant** viết text và code (generative AI với LLMs).

## Hiểu lầm thường gặp

**“AI hiểu như con người.”** Đây vẫn là vấn đề tranh luận. Khi làm việc, hãy xem output là dự đoán cần kiểm tra.

**“AI luôn biết tin mới nhất.”** Model học đến một ngày nhất định; nếu không có tool truy cập nguồn mới, nó có thể không biết thay đổi gần đây.

**“AI là ý tưởng mới.”** Thuật ngữ *artificial intelligence* được dùng tại workshop ở Dartmouth College năm 1956.

**“AI nghĩa là robot.”** Phần lớn AI bạn dùng là phần mềm không có thân thể.

## Những điểm chính

- AI là lĩnh vực rộng; machine learning học từ data; deep learning dùng neural network nhiều lớp.
- Predictive AI phán đoán về data có sẵn; generative AI tạo nội dung mới.
- LLM là generative model cho ngôn ngữ, nên có thể viết text và code.

Tiếp theo: [2. LLM hoạt động thế nào](/vi/02-how-llms-work).
