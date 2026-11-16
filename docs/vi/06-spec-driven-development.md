# 6. Spec-Driven Development (Phát triển dựa trên spec)

**Thời gian đọc dự kiến:** 7 phút

**Specification (spec)** mô tả cần xây gì, ai cần, scope, non-scope và cách biết nó hoạt động. Spec giúp người và AI tool thống nhất trên một tài liệu review được; không thay conversation với user hay testing.

## Vì sao viết spec trước code?

Không có spec, AI tự lấp gap bằng assumptions: chọn default sai, thêm feature không ai yêu cầu hoặc làm hỏng data cũ. Spec làm assumptions rõ khi còn rẻ để đổi.

## Workflow dựa trên spec

```text
Principles -> Specify -> Clarify -> Plan -> Tasks -> Implement -> Verify
```

| Bước | Câu hỏi | Output |
| --- | --- | --- |
| Principles | Luật nào mọi change phải theo? | Project principles (constitution) |
| Specify | User cần làm gì? | Requirements và acceptance criteria |
| Clarify | Điều gì mơ hồ? | Câu trả lời trong spec |
| Plan | Build thế nào, có thể hỏng đâu? | Technical plan |
| Tasks | Các bước nhỏ là gì? | Ordered task list |
| Implement | Code đổi gì? | Code và tests |
| Verify | Đạt spec và đã check chưa? | Test results và review notes |

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

## Những điểm chính

- Viết what và why trước how.
- Acceptance examples phải đủ cụ thể để check.
- Nêu non-goals để AI không bịa feature.
- Review plan và tasks trước implementation.

Tiếp theo: [7. Checklist chuẩn bị](/vi/07-setup-checklist).
