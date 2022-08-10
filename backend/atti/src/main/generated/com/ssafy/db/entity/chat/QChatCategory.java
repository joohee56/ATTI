package com.ssafy.db.entity.chat;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QChatCategory is a Querydsl query type for ChatCategory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QChatCategory extends EntityPathBase<ChatCategory> {

    private static final long serialVersionUID = -1722583030L;

    public static final QChatCategory chatCategory = new QChatCategory("chatCategory");

    public final NumberPath<Long> chatCategoryId = createNumber("chatCategoryId", Long.class);

    public final StringPath chatCategoryName = createString("chatCategoryName");

    public final ListPath<Chat, QChat> chats = this.<Chat, QChat>createList("chats", Chat.class, QChat.class, PathInits.DIRECT2);

    public QChatCategory(String variable) {
        super(ChatCategory.class, forVariable(variable));
    }

    public QChatCategory(Path<? extends ChatCategory> path) {
        super(path.getType(), path.getMetadata());
    }

    public QChatCategory(PathMetadata metadata) {
        super(ChatCategory.class, metadata);
    }

}

