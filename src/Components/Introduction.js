import React from "react";
import {Descriptions} from "antd";

export class Introduction extends React.Component
{
    render() {
        return<div>

            <Descriptions bordered column = {1}>
                <Descriptions.Item label = "Descriptions">本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。</Descriptions.Item>
            </Descriptions>
        </div>
    }
}