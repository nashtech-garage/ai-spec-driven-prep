# 7. Spec-Driven Development (Phát triển dựa trên spec)

**Thời gian đọc dự kiến:** 9 phút

**Spec-driven development (SDD)** là cách xây phần mềm trong đó một specification viết sẵn đi trước và dẫn dắt plan, tasks, code và các bước kiểm tra. SDD là một phương pháp, không phải một sản phẩm. Nó không phụ thuộc vào một AI tool, một model hay một stack công nghệ nào.

**Specification (spec)** mô tả cần xây gì, ai cần, scope, non-scope và cách biết nó hoạt động. Spec giúp người và AI tool thống nhất trên một tài liệu review được; không thay conversation với user hay testing.

Phần sau của chương này sẽ giới thiệu **Spec Kit**, một toolkit mã nguồn mở triển khai SDD. SDD và Spec Kit không phải là một.

## Vì sao viết spec trước code?

Không có spec, AI tự lấp gap bằng assumptions: chọn default sai, thêm feature không ai yêu cầu hoặc làm hỏng data cũ. Spec làm assumptions rõ khi còn rẻ để đổi.

## Workflow dựa trên spec

```mermaid
flowchart LR
    P["Principles"] --> S["Specify"]
    S --> C["Clarify (tùy chọn)"]
    C --> PL["Plan"]
    PL --> T["Tasks"]
    T --> I["Implement"]
    I --> V["Verify"]
    V --> CV["Converge"]
    CV -->|"Còn việc thiếu"| T
    V -->|"Phát hiện thiếu sót"| S
    C -->|"Câu hỏi còn mở"| S
```

| Bước | Câu hỏi | Output |
| --- | --- | --- |
| Principles | Luật nào mọi change phải theo? | Project principles (constitution) |
| Specify | User cần làm gì? | Requirements và acceptance criteria |
| Clarify (tùy chọn) | Điều gì mơ hồ? | Câu trả lời trong spec |
| Plan | Build thế nào, có thể hỏng đâu? | Technical plan |
| Tasks | Các bước nhỏ là gì? | Task list có thứ tự: Setup, Foundational, một phase cho mỗi user story, rồi Polish |
| Implement | Code đổi gì? | Code và tests |
| Verify | Đạt spec và đã check chưa? | Test results và review notes |
| Converge | Code còn thiếu gì so với artifacts? | Việc còn lại được thêm vào `tasks.md` |

Các bước này mô tả phương pháp SDD. Mỗi tool đặt tên và chia các bước khác nhau; phần lệnh của Spec Kit được trình bày ở cuối chương.

Review từng artifact trước bước kế. Sửa trong document rẻ hơn sau khi code xong.

## Cấu tạo spec tốt

- **User outcome:** user làm được gì và vì sao.
- **Scope:** behavior muốn làm ngay.
- **Non-goals:** cố ý không xây.
- **Rules:** defaults, validation và xử lý data cũ.
- **Acceptance criteria:** ví dụ cụ thể để check.
- **Quality requirements:** accessibility labels, error messages rõ.

## Ví dụ: task priority

- **Outcome:** user đánh dấu task `High` hoặc `Normal` khi tạo và đổi sau.
- **Scope:** priority hiện trong list.
- **Rule:** task cũ không priority được xem là `Normal`.
- **Non-goal:** không account, backend, due dates hay notifications.
- **Acceptance:** task cũ mở lên hiện `Normal` và vẫn edit được.
- **Accessibility:** control có label cho screen reader.

Spec buộc hỏi: *Default là gì? Data cũ ra sao? Có filtering không?*

## Viết spec trong năm phút

```text
User outcome:
Scope:
Non-goals:
Rules and defaults:
Acceptance example 1 (normal case):
Acceptance example 2 (edge case):
Quality requirement (for example, accessibility):
Open questions:
```

## Không gắn với một stack

Demo dùng Expo và React Native nhưng phương pháp hợp mọi mobile stack. Outcome và acceptance criteria giữ nguyên; plan, tools, build steps và tests phải theo stack. Flutter hoặc native Android cần plan và test commands riêng.

## Spec Kit: một cách triển khai SDD

[Spec Kit](https://github.com/github/spec-kit) là toolkit mã nguồn mở của GitHub. Nó cung cấp cho coding agent các lệnh có cấu trúc, templates và quality gates theo workflow SDD. Lệnh và tùy chọn hiện tại xem trong [tài liệu Spec Kit](https://github.github.io/spec-kit/).

```mermaid
flowchart TB
    SDD["SDD: phương pháp"] --> SK["Spec Kit: một toolkit triển khai nó"]
    SK --> AG["Coding agent của bạn, ví dụ Copilot hoặc Claude"]
    AG --> APP["App, plan và tests của bạn"]
```

Ba điểm sau giúp tránh nhầm lẫn:

- **SDD là phương pháp.** Bạn có thể thực hành bằng một file Markdown thường và bất kỳ chat assistant nào.
- **Spec Kit là một công cụ cho phương pháp đó.** Nó làm việc với nhiều coding agent, trong đó có GitHub Copilot, công cụ mà buổi workshop này dùng. Các tool khác cũng có thể triển khai SDD.
- **Spec Kit không chỉ có SDD.** Nó còn có các quy trình tùy chọn cho việc sửa bug và đánh giá ý tưởng. Chúng tách biệt với workflow SDD cốt lõi.

### Luồng tối thiểu

Tạo constitution một lần cho mỗi project, rồi lặp lại các bước còn lại cho từng feature. Chạy các lệnh này trong chat của agent, không chạy trong terminal, từng lệnh một, và review kết quả trước khi tiếp tục.

```text
/speckit-constitution Create principles focused on code quality, testing and maintainability.
/speckit-specify <mô tả feature>
/speckit-plan <lựa chọn kỹ thuật của bạn>
/speckit-tasks
/speckit-implement
/speckit-converge
```

### Lệnh

Tài liệu Spec Kit viết lệnh dạng `/speckit.specify`. Chế độ skills mặc định của GitHub Copilot dùng `/speckit-specify`, nên dùng dạng mà Copilot Chat nhận.

| Bước | Lệnh | Vai trò | Việc làm |
| --- | --- | --- | --- |
| Principles | `/speckit-constitution` | Cốt lõi | Tạo hoặc cập nhật các nguyên tắc dự án mà mọi bước sau đều phải theo. |
| Specify | `/speckit-specify` | Cốt lõi | Tạo requirements và user stories từ mô tả của bạn. |
| Clarify | `/speckit-clarify` | Quality gate (tùy chọn) | Hỏi tối đa năm câu hỏi tập trung về điểm chưa rõ trước khi lập plan. |
| Plan | `/speckit-plan` | Cốt lõi | Viết technical implementation plan. |
| Checklist | `/speckit-checklist` | Quality gate (tùy chọn) | Tạo checklist kiểm tra chất lượng của requirements. |
| Tasks | `/speckit-tasks` | Cốt lõi | Chia plan thành các task có thể thực hiện. |
| Analyze | `/speckit-analyze` | Quality gate (tùy chọn) | So sánh spec, plan và tasks, rồi báo mâu thuẫn và thiếu sót. Không sửa file. |
| Implement | `/speckit-implement` | Cốt lõi | Thực hiện các task. |
| Converge | `/speckit-converge` | Cốt lõi | Sau khi implement, so sánh code với artifacts và thêm việc còn thiếu vào `tasks.md`. |

### Quality gates: checklist và analyze

- **Checklist:** checklist cho requirements. Spec Kit gọi nó là "unit tests cho requirements". Nó kiểm tra spec có rõ và đủ chưa, không kiểm tra code chạy hay không. Bạn tự review và chỉ đánh dấu `[x]` khi đã chấp nhận. `/speckit-implement` đọc các checkbox này và hỏi bạn trước khi tiếp tục nếu còn mục chưa tick. Nó không tự tick thay bạn.
- **Analyze:** kiểm tra chỉ đọc trước khi implement. Tìm vấn đề như task không khớp requirement nào, hoặc lựa chọn plan mâu thuẫn với spec. Sửa từng vấn đề ở bước sở hữu nó, rồi chạy analyze lại.

### Converge: kiểm tra kết quả

Sau implement, `/speckit-converge` so sánh code với spec, plan và tasks. Nó chỉ được thêm việc còn thiếu vào `tasks.md`; không sửa hay xóa code. Converge trả lời "đã build đủ những gì artifacts mô tả chưa?". Tests trả lời "behavior có chạy đúng không?". Bạn cần cả hai.

### Thêm Spec Kit vào project đã có sẵn

Phần lớn công việc thực tế diễn ra trên project đã tồn tại. Có thể thêm Spec Kit vào project bằng `specify init --here`, cài trong thư mục hiện tại; ví dụ `specify init --here --integration copilot`. Xem tài liệu Spec Kit để biết tùy chọn hiện tại. Với lần chạy đầu, chọn một **bounded first change**: một thay đổi nhỏ, có ranh giới rõ và ví dụ nghiệm thu cụ thể.

## Những điểm chính

- Tách phương pháp khỏi công cụ: SDD là cách làm, còn Spec Kit là một toolkit triển khai nó.
- Viết what và why trước how.
- Acceptance examples phải đủ cụ thể để check.
- Nêu non-goals để AI không bịa feature.
- Review plan và tasks trước implementation.
- Biết quality gate nào là tùy chọn và mỗi gate kiểm tra gì.

Tiếp theo: [8. Checklist chuẩn bị](/vi/08-setup-checklist).
