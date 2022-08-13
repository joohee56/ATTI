package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPost is a Querydsl query type for Post
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPost extends EntityPathBase<Post> {

    private static final long serialVersionUID = -202529384L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPost post = new QPost("post");

    public final QCategory category;

    public final ListPath<Comment, QComment> comments = this.<Comment, QComment>createList("comments", Comment.class, QComment.class, PathInits.DIRECT2);

    public final ListPath<File, QFile> files = this.<File, QFile>createList("files", File.class, QFile.class, PathInits.DIRECT2);

    public final ListPath<Image, QImage> images = this.<Image, QImage>createList("images", Image.class, QImage.class, PathInits.DIRECT2);

    public final BooleanPath postAnoInfo = createBoolean("postAnoInfo");

    public final BooleanPath postComBanInfo = createBoolean("postComBanInfo");

    public final StringPath postContent = createString("postContent");

    public final NumberPath<Long> postId = createNumber("postId", Long.class);

    public final DateTimePath<java.util.Date> postRegDate = createDateTime("postRegDate", java.util.Date.class);

    public final DateTimePath<java.util.Date> postUpdDate = createDateTime("postUpdDate", java.util.Date.class);

    public final com.ssafy.db.entity.user.QUser user;

    public final ListPath<UserPostLike, QUserPostLike> userpostlikes = this.<UserPostLike, QUserPostLike>createList("userpostlikes", UserPostLike.class, QUserPostLike.class, PathInits.DIRECT2);

    public final ListPath<UserPostMention, QUserPostMention> userpostmentions = this.<UserPostMention, QUserPostMention>createList("userpostmentions", UserPostMention.class, QUserPostMention.class, PathInits.DIRECT2);

    public QPost(String variable) {
        this(Post.class, forVariable(variable), INITS);
    }

    public QPost(Path<? extends Post> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPost(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPost(PathMetadata metadata, PathInits inits) {
        this(Post.class, metadata, inits);
    }

    public QPost(Class<? extends Post> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new QCategory(forProperty("category"), inits.get("category")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

